var video = document.getElementsByTagName('video')
var btn = document.getElementById('btnPausa')


function play_pause(){
    if(video.paused){
        video.play();
        btn.innerHTML = "Pausa";
    }else{
        video.pause();
        btn.innerHTML = "Play";
    }
}