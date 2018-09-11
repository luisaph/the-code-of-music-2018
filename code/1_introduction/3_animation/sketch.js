var blip;

function preload(){
  blip = loadSound('sounds/blip.wav');
}

function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(100, 233, 100);
  let angle = map(blip.currentTime(), 0, blip.duration(), 0, -TWO_PI);
  push();
  translate(width/2, height/2);
  rotate(angle);
  rect(0, 0, 100, 100);
  pop();
}

function keyReleased(){
  blip.play();
}
