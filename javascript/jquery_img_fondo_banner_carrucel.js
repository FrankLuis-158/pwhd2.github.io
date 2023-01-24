


// function deteccion(){
//     if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod')
//     {
//     }else{
//     }
//     alert('Estás entrando desde un '+navigator.platform);
//     document.getElementById('texto').innerHTML =  navigator.platform;
// }
// window.onload = setTimeout("deteccion();",1000);




function myFunction(x) {
    if (x.matches) { // If media query matches
     

    } 
    else {
        function changeBg()
        {
            const images = [
                'url("img/parallax/fondo_parallax_6.gif")',
                'url("img/parallax/fondo_parallax_5.gif")',
                'url("img/parallax/fondo_parallax_10.gif")',
            ]
            const img_fondo_banner = document.getElementById ('img_fondo_banner')
            const bg = images[Math.floor(Math.random() * 
                images.length)];
                img_fondo_banner.style.backgroundImage = bg;
        }
        
        setInterval(changeBg, 10000)
    }
  }
  
  var x = window.matchMedia("(max-width: 560px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes



//   function changeBg()
//   {
//       const images = [
//           'url("img/parallax/fondo_parallax_2.gif")',
//           'url("img/parallax/fondo_parallax_3.gif")',
//       ]
//       const img_fondo_banner = document.getElementById ('img_fondo_banner')
//       const bg = images[Math.floor(Math.random() * 
//           images.length)];
//           img_fondo_banner.style.backgroundImage = bg;
//   }
  
//   setInterval(changeBg, 100)



