//'esc' to stop sketch after playing

import processing.video.*;

String[] video = { "./sumidagawa_00000.mp4", "./sumidagawa_00001.mp4", "./sumidagawa_00002.mp4", "./sumidagawa_00003.mp4"};
float backgroundColor = 0;
float[] videoX = new float[4];
float[] changeX = new float[4];
float[] videoY = new float[4];

Movie[] movies = new Movie[4];


void video_filenames() // this just displays the filenames
{
  for (int i = 0; i < video.length; i++) // hardwired for 10 videos right now
  {
    String filenumber = String.format("%05d", i); // this formats integers forcing 5 digits with leading 0's if needed
    String filename = "./"+"sumidagawa_"+filenumber+".mp4";
    println(filename);
  }
}

void videoY_value()
{
  for (int i = 0; i < videoY.length; i ++)
  {
    videoY[i] = random(1,6);
  }
}

void videoX_value()
{
  for (int i = 0; i < videoX.length; i ++)
  {
    videoX[i] = 0;
  }
}
  
void changeX_value()
{
  for (int i = 0; i < changeX.length; i ++)
  {
    changeX[i] = random(0.5,5);
  }
}

void setup() {

  println(dataPath(""));
  for (int i = 0; i < changeX.length; i++) //Prints list of scrolling speeds
  {
  println("changeX-" + changeX[i]);
  }
  for (int i = 0; i < videoY.length; i++) //Prints list of video Y postiions
  {
  println("changeY-" + videoY[i]);
  }

  video_filenames();
  changeX_value();
  videoY_value();
  videoX_value();
  
  fullScreen(); 
  frameRate(30);
  background(0);
  
  for (int i = 0; i < movies.length; i++)
  {
  movies[i] = new Movie(this, video[i]);
  movies[i].loop();
  }
  
}

void movieEvent(Movie movies) 
{ 
 movies.read();
}

void draw() {  
  background(backgroundColor);
  
  for (int i = 0; i < movies.length; i++)
  {
    image(movies[i], videoX[i], displayHeight/videoY[i], 240, 240);  
    videoX[i] = videoX[i] + changeX[i];
   }
  
}
