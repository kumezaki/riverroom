//'esc' to stop sketch after playing

import processing.video.*; //Video Library

//enter the correct video path
String PATH = "./sumidagawa_00001.mp4";
float backgroundColor = 0;
float videoX = 0;
float changeX = 0.75;

Movie mov;

void setup() {

  println(dataPath(""));

  fullScreen(); //written as: size(displayWidth, displayHeight); in Processing 2.x
  frameRate(30);
  background(0);
  mov = new Movie(this, PATH); //<>//
  mov.loop();
}
void movieEvent(Movie m) {
  m.read();
}

void draw() {
  background(backgroundColor);
  image(mov, videoX, displayHeight/2-240, 480, 480);
  
  videoX = videoX + changeX; //moves video along x axis
} 