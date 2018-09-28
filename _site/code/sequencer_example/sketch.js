// Sequencer
var bpm = 20;
var nSteps = 8;
var nTracks = 4;
var cells = [];
var playButton;
var currentStep = 0;
var beats = 0;

// Sound
var kit;
var drumNames = ["hho", "hh", "snare", "kick"];
kit = new Tone.Players(
    { 
      "hho" : "./samples/505/hho.mp3",
      "hh" : "./samples/505/hh.mp3",
      "snare" : "./samples/505/snare.mp3",
      "kick" : "./samples/505/kick.mp3"
    }
);
kit.toMaster();
Tone.Transport.scheduleRepeat(onBeat, "4n");

// Visuals
var cellWidth, cellHeight;

function setup() {
  // Initialize all sequencer cells. ON: 1. OFF: -1.
  for(var track = 0; track < nTracks; track++){
    cells[track] = [];
    for(var step = 0; step < nSteps; step++){
        cells[track][step] = -1;
    }
  }
  
  playButton = createButton('play');
  playButton.position(560, 300);
  playButton.mouseClicked(togglePlay);

  createCanvas(600, 300);
  cellWidth = width / nSteps;
  cellHeight = height / nTracks;
  
}

function onBeat(time){
  var velocity = 0.5;
  for(var track = 0; track < nTracks; track++){
    if(cells[track][currentStep] == 1){
      var drum = kit.get(drumNames[track]);
      drum.start(time);
    }
  }
  beats ++;
  currentStep = beats % nSteps;
}

function draw(){
  background(255);
  stroke(0);
  
  // Draw cells that are on
  for(var step = 0; step < nSteps; step++){
    for(var track = 0; track < nTracks; track++){
      if(cells[track][step] == 1){
        fill(20 + track*30);
        rect(step*cellWidth, track*cellHeight, cellWidth, cellHeight);
      }
    }
  }
  
  // Draw horizontal lines
  for(var i = 1; i <= nTracks; i++){
    var y = i*cellHeight;
    line(0, y, width, y);
  }
  
  // Draw vertical lines
  for(var i = 1; i <= nSteps; i++){
    stroke(0);
    line(i*cellWidth, 0, i*cellWidth, height);
  }

  // Highlight current step
  var highlight = (beats - 1 )% nSteps;
    fill(200, 60);
    noStroke();
    text(highlight, 10, 10);
    rect((highlight)*cellWidth, 0, cellWidth, height);
}

function mousePressed(){
  // If the mouse is within the bounds of the canvas
  if( 0 < mouseX && mouseX < width &&
      0 < mouseY && mouseY < height){
    
    // Determine which cell the mouse is on
    var i = floor(mouseX / cellWidth);
    var j = floor(mouseY / cellHeight);
    
    // Toggle cell on/off
    cells[j][i] = -cells[j][i];
  }
}

function togglePlay(){
  if(Tone.Transport.state == "started"){
    Tone.Transport.stop();
    playButton.html('play');
  }
  else{
    Tone.Transport.start();
    playButton.html('stop');
  }
  
}