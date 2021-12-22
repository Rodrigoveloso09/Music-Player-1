let audio = document.getElementById("audio");



function play(){
   audio.play();
 }
 
 function pause(){
    audio.pause();
  }
 
  function retroceder(){
    audio.playbackRate -= 0.1;
  }
 
  function avancar(){
    audio.playbackRate += 0.1;
  }


  