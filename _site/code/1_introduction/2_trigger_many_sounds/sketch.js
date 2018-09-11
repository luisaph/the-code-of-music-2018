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

}

function keyReleased(){
  if(keyCode == 65){
      blip.play();
    }
    else if(keyCode == 83){
      pink.play();
    }
    else if(keyCode == 68){
      tears.play();
    }
    else if(keyCode = 70){
      takerimba.play();
    }
}