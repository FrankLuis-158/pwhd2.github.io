var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
desaparecer = document.getElementById('desaparecer'),
src = document.getElementById('src'),
h3 = document.getElementById('h3'),
h4 = document.getElementById('h4'),
video = document.getElementById('video'),
aparecer = document.getElementById('aparecer');

// newElement.textContent = "sdfsd";

btnAbrirPopup.addEventListener('click',function(){
    overlay.classList.add('active');
    popup.classList.add('active');
    //  h5.after(video.cloneNode(true));
  
});


btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    document.getElementById('video').replaceWith(video);
    
    // video.remove();
 
});

// desaparecer.addEventListener('click',function(){  
//    h3.remove();   
// });

// aparecer.addEventListener('click',function(){
//    h3.after('active');
//    h3.add('active');

// });

// function pauseVid() { 
//     video.pause(); 
// } 

// var video = document.getElementById("video");
// function stopVideo(){
//      video.stopVideo();
//      video.currentTime = 0;
// }





//////////////////////////////////2//////////////////////////////////////////


var btnAbrirPopup_2 = document.getElementById('btn-abrir-popup_2'),
overlay_2 = document.getElementById('overlay_2'),
popup_2 = document.getElementById('popup_2'),
btnCerrarPopup_2 = document.getElementById('btn-cerrar-popup_2'),
video_2 = document.getElementById('video_2');



btnAbrirPopup_2.addEventListener('click',function(){
    overlay_2.classList.add('active');
    popup_2.classList.add('active');
});

btnCerrarPopup_2.addEventListener('click',function(){
    overlay_2.classList.remove('active');
    popup_2.classList.remove('active');
    document.getElementById('video_2').replaceWith(video_2);
});


















