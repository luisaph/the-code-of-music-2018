var blip;

function preload(){
  blip = loadSound('sounds/blip.wav');
}

function setup() {
  createCanvas(600, 400);
  background(100, 233, 100);
}

function draw() {
  if(keyIsPressed){
    if(key == 'a'){
      ellipse(120, 120, 60, 60);
      blip.play();
    }
  }
  else{
    background(100, 233, 100);
  }
}

