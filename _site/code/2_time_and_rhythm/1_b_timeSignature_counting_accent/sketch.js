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
      
    }, "8n");
  kitPart.start();
  //Set the subdivision which the swing will be applied to. The default values is a 16th note. Value must be less than a quarter note.
  // Tone.Transport.swingSubdivision("8n");
  // Tone.Transport.swing(0.2);
  Tone.Transport.start();
}

function draw() {
    //Tone.Transport.bpm.value = map(mouseX, 0, width, 20, 180);
}