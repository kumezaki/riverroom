import processing.video.*; //Video Library

//enter the correct video path
String PATH = "sumidagawa_00001.mp4";

Movie mov;

void setup() {
println(dataPath(PATH));

  fullScreen(); //written as: size(displayWidth, displayHeight); in Processing 2.x
  frameRate(30);
  background(0);
  mov = new Movie(this, PATH);
  mov.play();
}
void movieEvent(Movie m) {
  m.read();
}

void draw() {
  image(mov, displayWidth/2-240, displayHeight/2-240, 480, 480);
} 