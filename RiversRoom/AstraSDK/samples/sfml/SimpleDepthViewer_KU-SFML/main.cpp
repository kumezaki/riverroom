// This file is part of the Orbbec Astra SDK [https://orbbec3d.com]
// Copyright (c) 2015 Orbbec 3D
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Be excellent to each other.
#include <SFML/Graphics.hpp>
#include <astra/astra.hpp>
#include "LitDepthVisualizer.hpp"
#include <chrono>
#include <iostream>
#include <iomanip>
#include <key_handler.h>
#include <sstream>

#include "osc/OscOutboundPacketStream.h"
#include "osc/OscReceivedElements.h"
#include "osc/OscPacketListener.h"
#include "ip/UdpSocket.h"

#define ADDRESS "127.0.0.1"
#define PORT_IN 7100
#define PORT_OUT 7101

char ip_add[128];

const int w{32}, h{w/4*3};

#define OUTPUT_BUFFER_SIZE (w * h * sizeof(int32_t) + 1024)

float rel_h_min{0.};
float rel_h_max{1.};

class OSCListener : public osc::OscPacketListener
{
public:

	OSCListener()
	{
		UdpListeningReceiveSocket s(IpEndpointName( IpEndpointName::ANY_ADDRESS, PORT_IN ), this );
		std::cout << "press ctrl-c to end\n";
		s.RunUntilSigInt();
	}

protected:

    virtual void ProcessMessage( const osc::ReceivedMessage& m, const IpEndpointName& remoteEndpoint ) override
    {
        try
        {
            if ( std::strcmp( m.AddressPattern(), "/astra/rel_h" ) == 0 )
            {
                osc::ReceivedMessageArgumentStream args = m.ArgumentStream();

                args >> rel_h_min >> rel_h_max >> osc::EndMessage;
                
                std::cout << "received '/astra/rel_h' message with arguments: " << rel_h_min << " " << rel_h_max << "\n";
            }
        }
        catch( osc::Exception& e )
        {
            std::cout << "error while parsing message: " << m.AddressPattern() << ": " << e.what() << "\n";
        }
    }    
};

class DepthFrameListener : public astra::FrameListener, public UdpTransmitSocket
{
public:

	DepthFrameListener(const char* _osc_add_depth)
		: UdpTransmitSocket(IpEndpointName( ip_add, PORT_OUT )),
			p( (char*)buffer, OUTPUT_BUFFER_SIZE ),
			osc_add_depth(_osc_add_depth)
	{
		h_start = rel_h_min * h;
		h_end = rel_h_max * h;
	}

	bool is_finished() const { return isFinished_; }

private:

	void on_frame_ready(astra::StreamReader& reader, astra::Frame& frame) override
	{
		const astra::DepthFrame depthFrame = frame.get<astra::DepthFrame>();

		if (depthFrame.is_valid())
		{
			if (depthFrame.frame_index() % 100 == 0)
				print_depth_frame(depthFrame);

			send_osc(depthFrame);
		}
	}

	double get_average_cell_value(const astra::DepthFrame& depthFrame, size_t top_left)
	{
		const int num_columns = depthFrame.width() / w;
		const int num_rows = depthFrame.height() / h;
		
		int left = top_left;
		double total = 0.;
		for (int r = 0; r < num_rows; r++, left += depthFrame.width())
			for (int c = 0; c < num_columns; c++)
				total += (double)depthFrame.data()[left+c];
		
		std::printf("%ld %f %f\n",top_left,total,total/((double)num_columns*num_rows));

		return total / ((double)num_columns*num_rows);
	}
	
	void send_osc(const astra::DepthFrame& depthFrame)
	{
		/* matrix dimensions */
		p.Clear();
		p << osc::BeginMessage( "/astra/dim" );
		p << (int32_t)w << (int32_t)(h_end-h_start);
		p << osc::EndMessage;

		UdpTransmitSocket::Send( p.Data(), p.Size() );

		/* matrix data */
		p.Clear();
		p << osc::BeginMessage( osc_add_depth );
		
		const int w_frame = depthFrame.width();
		const int w_skip = depthFrame.width() / w;
		const int h_skip = depthFrame.height() / h * w_frame;
		const size_t start_cell = h_start * h_skip, end_cell = h_end * h_skip;
		for (size_t x_start = start_cell; x_start < end_cell; x_start += h_skip)
		{
			const size_t x_end = x_start + w_frame;
			for (size_t x = x_start; x < x_end; x += w_skip)
#if 1
				p << (int32_t)depthFrame.data()[x];
#else
				p << (int32_t)get_average_cell_value(depthFrame,x);
#endif
		}

		p << osc::EndMessage;

		UdpTransmitSocket::Send( p.Data(), p.Size() );
    }

	void print_depth_frame(const astra::DepthFrame& depthFrame) const
	{
		std::printf("Depth frameIndex: %d byte_length: %ld width: %d height: %d\n",
			depthFrame.frame_index(),
			depthFrame.byte_length(),
			depthFrame.width(),
			depthFrame.height());
	}

	bool isFinished_{false};

	osc::OutboundPacketStream p;
	char buffer[OUTPUT_BUFFER_SIZE];

	int h_start{0};
	int h_end{h};
	
	const char* osc_add_depth{NULL};
};

int main(int argc, char** argv)
{
	strcpy(ip_add,argc==2?argv[1]:ADDRESS);
	printf("setting IP address to %s\n",ip_add);
		
	OSCListener osc_listener;
	
	astra::initialize();

    set_key_handler();

    astra::StreamSet streamSet1("device/sensor0");
    astra::StreamSet streamSet2("device/sensor1");
    astra::StreamReader reader1 = streamSet1.create_reader();
    astra::StreamReader reader2 = streamSet2.create_reader();

	reader1.stream<astra::DepthStream>().start();
	reader2.stream<astra::DepthStream>().start();

	DepthFrameListener listener1("/astra/depth/0");
	DepthFrameListener listener2("/astra/depth/1");

	reader1.add_listener(listener1);
	reader2.add_listener(listener2);

	do {
		astra_temp_update();
	} while (shouldContinue);

	reader1.remove_listener(listener1);
	reader2.remove_listener(listener2);

	astra::terminate();

	return 0;
}
