var blip;

function preload(){
  blip = loadSound('sounds/blip.wav');
}

function setup() {
  createCanvas(600, 400);
  background(100, 233, 100);
  blip.play();
}
