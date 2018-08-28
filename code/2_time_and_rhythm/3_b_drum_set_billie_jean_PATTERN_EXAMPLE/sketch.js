var kit;
var kickPart;
var snarePart;
var hhPart;

var bpm = 60;

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
  
}

function setup() {
  
  //Part: when I want what to happen 
  kitPart = new Tone.Part(function(time, value){
      //start at time, offset sample 0, play for 8n, no repitching, gain
      kit.start(value, time, 0, "8n", 0, 1);
      println(Tone.Transport.position)
      
    },  [
          ["0:0:0", "kick"],
          ["0:0:8", "kick"],
          ["0:0:4", "snare"],
          ["0:0:12", "snare"],
          ["0:0:0", "hh"],
          ["0:0:2", "hh"],
          ["0:0:4", "hh"],
          ["0:0:6", "hh"],
          ["0:0:8", "hh"],
          ["0:0:10", "hh"],
          ["0:0:12", "hh"],
          ["0:0:14", "hh"]
          
        ]);
        
  kitPart.start();
  kitPart.loop = true;
  Tone.Transport.start();
  
}

function draw() {
    //Tone.Transport.bpm.value = map(mouseX, 0, width, 20, 180);
}