$(document).ready(main);

var contador = 1;

function main() {
                  $('.menu_bar').click(function()
                  //$('nav').toggle();
                  {                  
                        if(contador == 1)
                           {
                              $('nav').animate({ left:'0' });
                              contador = 0;
                           }
                      else{
                              contador = 1;
                              $('nav').animate({ left:'-100%'});
                          }
                  }
                  );

                     //Mostramos y ocultamos menus
                     $('.submenu').click(function()
                     {
                     $(this).children('.children').slideToggle();
                     }
                     )


               }




let ubicacionPrincipal  = window.pageYOffset; 
window.onscroll = function()
{
    let Desplazamiento_actual = window.pageYOffset; 
    if(ubicacionPrincipal >= Desplazamiento_actual)
    {
        document.getElementById('navbar').style.left = '-100%';
      //  contador = 0;
    }
     else
      {
         document.getElementById('navbar').style.left = '100%';
         contador = 1;
      }

    //  if(ubicacionPrincipal <= Desplazamiento_actual)
    //  {
    //      document.getElementById('navbar').style.top = '100%';
    //  }
    //  else
    //   {
    //      document.getElementById('navbar').style.top = '0';
    //   }
  
  
    ubicacionPrincipal = Desplazamiento_actual;





}
