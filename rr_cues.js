autowatch = 1;

function set_cue(key)
{
	switch (key)
	{
		case 48: // 0
			messnamed("end_msg",0);
			messnamed("gain_msg",-24.);
			messnamed("gate_msg",0);
			messnamed("clock_msg","stop");
			messnamed("br_main_msg",0.);
			messnamed("br_sub_msg",1.);
			messnamed("3_tagname_msg","riversroom.com",-0.8,1.0);
			break;
		case 49: // 1
			messnamed("end_msg",0);
			messnamed("gain_msg",-10.,10000);
			messnamed("gate_msg",1);
			messnamed("clock_msg","start");
			messnamed("br_main_msg",1.,10000);
			messnamed("br_sub_msg",1.);
			messnamed("3_tagname_msg","riversroom.com",-0.8,1.0);
			break;
		case 50: // 2
			messnamed("end_msg",1);
			messnamed("gain_msg",-10.);
			messnamed("gate_msg",1);
			messnamed("clock_msg","stop");
			messnamed("br_main_msg",1.);
			messnamed("br_sub_msg",1.);
			messnamed("3_tagname_msg","",-0.8,1.0);
			break;
		default:
			break;
	}
}
