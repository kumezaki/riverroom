//'esc' to stop sketch after playing

import processing.video.*;

String[] video = { "./sumidagawa_00001.mp4", "./sumidagawa_00002.mp4" };
float backgroundColor = 0;
float video1X = 0;
float change1X = 0.75;
float video2X = 0;
float change2X = 1.5;

Movie mov1;
Movie mov2;

void video_filenames() // this just displays the filenames
{
  for (int i = 0; i < 10; i++) // hardwired for 10 videos right now
  {
    String filenumber = String.format("%05d", i); // this formats integers forcing 5 digits with leading 0's if needed
    String filename = "./"+"sumidagawa_"+filenumber+".mp4";
    println(filename);
  }
}

void setup() {

  println(dataPath(""));
  video_filenames();

  fullScreen(); 
  frameRate(30);
  background(0);
  mov1 = new Movie(this, video[0]);
  mov1.loop();
  mov2 = new Movie(this, video[1]);
  mov2.loop();
  
}

void movieEvent(Movie m) {
  
  if (m == mov1) {
    mov1.read();
  } else if (m == mov2) {
    mov2.read();
  }
}

void draw() {
  
  background(backgroundColor);
  image(mov1, video1X, displayHeight/6, 240, 240);
  image(mov2, video2X, displayHeight/1.75, 240, 240);
  
  video1X = video1X + change1X; //moves video along x axis
  video2X = video2X + change2X; //moves video along x axis
}