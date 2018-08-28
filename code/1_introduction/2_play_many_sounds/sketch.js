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
  background(100, 233, 100);
}

function draw() {
  if(keyIsPressed){
    if(key == 'a'){
      ellipse(120, 120, 60, 60);
      blip.play();
    }
    else if(key =='s'){
      rect(mouseX, mouseY, 10, 10);
      pink.play();
    }
    else if(key == 'd'){
      line(random(width), random(height), random(width), random(height) );
      tears.play();
    }
    else if(key = 'f'){
      quad(370, 55, 400, 30, 430, 70, 390, 78);
      takerimba.play();
    }
  }
  else{
    background(100, 233, 100);
  }
  
}

