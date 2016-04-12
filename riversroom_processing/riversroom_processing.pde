//'esc' to stop sketch after playing

import processing.video.*;

int numMovies = 6; // AC: Set to the total number of .mp4s 
float backgroundColor = 0; //initialized background color to black 
float Ymin = 0.5; //minimum inital Y value
float Ymax = 6.0; //maximum initial Y value
float Cmin = 0.5; // minimum scroll speed
float Cmax = 5.0; // maximum scroll speed

String[] video = new String[numMovies]; 
float[] videoX = new float[numMovies]; 
float[] initY = new float[numMovies];
float[] changeX = new float[numMovies];

Movie[] movies = new Movie[numMovies];

void video_filenames() // this just displays the filenames
{
  for (int i = 0; i < numMovies; i++)
  {
    String filenumber = String.format("%05d", i); // this formats integers forcing 5 digits with leading 0's if needed
    String filename = "./"+"sumidagawa_"+filenumber+".mp4";
    println(filename);
    video[i] = "./"+"sumidagawa_"+filenumber+".mp4";
  }
}


void init_float_array_random()
{
 for (int i = 0; i < initY.length; i++) //selects an initial Y value for each video
   initY[i] = random(Ymin,Ymax);
  
  for (int i = 0; i < changeX.length; i++) //selects an initial scroll speed for each video
   changeX[i] = random(Cmin,Cmax);
   
  for (int i = 0; i < videoX.length; i++) //sets each video's inital X value to 0
   videoX[i] = 0;
}

void setup() {

  video_filenames();
  init_float_array_random();
  
  //fullScreen();
  size(900,900); // AC: this is just for ease of testing and can
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
    image(movies[i], videoX[i], displayHeight/initY[i], 240, 240);  
    videoX[i] += changeX[i];
   }
}
  
