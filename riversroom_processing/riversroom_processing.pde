//'esc' to stop sketch after playing

import processing.video.*;

String[] video = { "./sumidagawa_00000.mp4", "./sumidagawa_00001.mp4", "./sumidagawa_00002.mp4", "./sumidagawa_00003.mp4"}; // KU: no need to initialize the array; it's done in video_filenames
float backgroundColor = 0;
float[] videoX = new float[4]; // KU: how to avoid hardcoding these arrays to 4? maybe start by defining a global variable that is the number of movies
float[] changeX = new float[4];
float[] videoY = new float[4];

Movie[] movies = new Movie[4];


void video_filenames() // this just displays the filenames
{
  for (int i = 0; i < video.length; i++) // hardwired for 10 videos right now; KU: this comment is no longer needed (great way to check for the number of videos, by the way!) 
  {
    String filenumber = String.format("%05d", i); // this formats integers forcing 5 digits with leading 0's if needed
    String filename = "./"+"sumidagawa_"+filenumber+".mp4";
    println(filename);
  }
}

// KU: you might consider abstracting the following 3 functions into one:
void init_float_array_random(float[] array, float min, float max) // KU: I need to check if this will work; not sure if the array argument is passed in by reference or not
{
  for (int i = 0; i < array.length; i++)
    array[i] = random(min,max);
}

void videoY_value() // KU: rename? maybe to init_videoY_value()?
{
  for (int i = 0; i < videoY.length; i ++) // KU: eliminate space between i and ++
  {
    videoY[i] = random(1,6); // KU: should probably replace the random functions argument values with global variables
  }
}

void videoX_value() // KU: ditto about renaming
{
  for (int i = 0; i < videoX.length; i ++)
  {
    videoX[i] = 0;
  }
}
  
void changeX_value() // KU: ditto about renaming
{
  for (int i = 0; i < changeX.length; i ++)
  {
    changeX[i] = random(0.5,5); // KU: should probably replace the random functions argument values with global variables
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
//  videoY_value();
  init_float_array_random(videoY,1,6);
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
    videoX[i] = videoX[i] + changeX[i]; // you might try the videoX[i] += changeX[i];
   }
  
}