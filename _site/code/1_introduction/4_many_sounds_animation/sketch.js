var blip;
var pink;
var tears; 
var takerimba; 

function preload(){
  blip = loadSound('sounds/blip.wav');
  pink = loadSound('sounds/pink.wav');
  tears = loadSound('sounds/tears.wav');
  takerimba = loadSound('sounds/takerimba.wav');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100, 233, 100);
  
  // Blip
  let angle = map(blip.currentTime(), 0, blip.duration(), 0, -TWO_PI);
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 100, 100);
  pop();
  
  // Pink
  let x = map(pink.currentTime(), 0, blip.duration(), 0, 100);
  ellipse(x, height/3, 100, 100);
  
  // Tears
  
  // Takerimba
  
}

function keyReleased() {
  if (keyCode == 65) {
    blip.play();
  } else if (keyCode == 83) {
    pink.play();
  } else if (keyCode == 68) {
    tears.play();
  } else if (keyCode = 70) {
    takerimba.play();
  }
}