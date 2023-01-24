
    var musik = new Audio();
    musik.src = "musica/portada.mp3";
    musik.loop = true;
    // musik.play();


function mulaiAudio()
{
    var play = document.getElementById("play");
    var mute = document.getElementById("mute");

    play.addEventListener('click',fplay);
    mute.addEventListener('click',fmute);

    function fplay(){
        if(musik.paused){
           musik.play();
        //    play.style.background = "url(/img/tarjeta_presentacion/tarjeta_presentacion2.jpg)";
        } else{
            musik.pause();
        //    play.style.background = "url(/img/tarjeta_presentacion/tarjeta_presentacion3.jpg)"; 
        }
    }

function fmute(){
    if(musik.muted){
        musik.muted = false;
        // mute.style.background = "url(/img/tarjeta_presentacion/tarjeta_presentacion2.jpg)";
    }else{
            musik.muted= true;
            // mute.style.background = "url(/img/tarjeta_presentacion/tarjeta_presentacion3.jpg)"; 
        }
}


}

window.addEventListener('load',mulaiAudio);



