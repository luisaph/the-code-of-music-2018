
var blip;

playing = false;
counter = 0;

x = 100;
y = 100;
size = 100;
angle = 0;

function preload(){
  createCanvas(800, 600);
  blip = loadSound('sounds/blip.wav');
}

function setup() {
  rectMode(CENTER);
}

function draw() {
  background(0);

  angle = angle + 1;
  x = x + random(40);
  y = y + random(40);

  if(playing){
    push();
    translate(x, y);
    rotate(radians(angle));
    rect(0, 0, 100, 100);
    pop();
    counter++;
    if(counter > 50){
      playing = false;
      counter = 0;
      angle = 0;
    }
  } 

}

function keyPressed(){
  playing = true;
  x = mouseX;
  y = mouseY;
  blip.play();
}

