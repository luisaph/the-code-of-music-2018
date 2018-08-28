var kit;
var kickPart;
var snarePart;
var hhPart;

var bpm = 60;

var drumNames;

function preload(){
  kit = new Tone.MultiPlayer({
			urls:{
			  "kick" : "/samples/505/kick.mp3",
			  "snare" : "/samples/505/snare.mp3",
				"hh" : "/samples/505/hh.mp3",
				"hho" : "/samples/505/hho.mp3",
			}
	});
  kit.toMaster();
  
  drumNames = ["kick", "snare", "hh", "hho"];
}

function setup() {
  
  kickPart = new Tone.Loop(function(time){
      //start at time, offset sample 0, play for 8n, no repitching, gain
      kit.start("kick", time, 0, "8n", 0, 1);
      
    }, "2n");
  kickPart.start();
  
  snarePart = new Tone.Loop(function(time){
      //start at time, offset sample 0, play for 8n, no repitching, gain
      kit.start("snare", time, 0, "8n", 0, 0.5);
      
    }, "2n");
  snarePart.start("4n");
  
  hhPart = new Tone.Loop(function(time){
      //start at time, offset sample 0, play for 8n, no repitching, gain
      kit.start("hh", time, 0, "8n", 0, 1);
      
    }, "8n");
  hhPart.start();
  
  Tone.Transport.start();
  
}

function draw() {
    //Tone.Transport.bpm.value = map(mouseX, 0, width, 20, 180);
}