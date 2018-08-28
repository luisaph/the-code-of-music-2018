var kit;
var kitPart;
var bpm = 60;

function preload(){
  kit = new Tone.MultiPlayer({
			urls:{
			  "kick" : "/samples/505/kick.mp3"
			}
	});
  kit.toMaster();
}

function setup() {
  Tone.Transport.timeSignature = 2;
  kitPart = new Tone.Loop(function(time){
      var beat = Tone.Transport.position.split(':')[1];
      
      if(beat == 0) gain = 1;
      else gain = 0.2;
      
      println(beat);
      //start at time, offset sample 0, play for 8n, no repitching, gain
      kit.start("kick", time, 0, "8n", 0, gain);
      
    }, "4n");
  kitPart.start();
  Tone.Transport.start();
}

function draw() {
    //Tone.Transport.bpm.value = map(mouseX, 0, width, 20, 180);
}