//'esc' to stop sketch after playing

import processing.video.*;

String video1 = "./sumidagawa_00001.mp4";
String video2 = "./sumidagawa_00002.mp4";
float backgroundColor = 0;
float video1X = 0;
float change1X = 0.75;
float video2X = 0;
float change2X = 1.5;

Movie mov1;
Movie mov2;

void setup() {

  println(dataPath(""));

  fullScreen(); 
  frameRate(30);
  background(0);
  mov1 = new Movie(this, video1);
  mov1.loop();
  mov2 = new Movie(this, video2);
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