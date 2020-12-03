
var updown;
var i = 0;

var tekst = "<button>Contact Us!</button>"
var res = tekst.split("")

console.log(res.length);


function change(){

  var a =  document.scrollingElement.scrollTop;
  var h = window.innerHeight;
  scrollDir()

  if (updown==0) {
    if (a<h) {
    window.scrollTo(0,h)

  }else if (a>=h) {
    window.scrollTo(0,h*2)

    }

  }else if (updown==1) {
    if (a>h ) {
      window.scrollTo(0,h)

    }else if (a<=h) {
      window.scrollTo(0,0)


    }


  }

   }



   function scrollDir(){
     if (event.deltaY < 0)
      {
         updown = 1
      }
      else if (event.deltaY > 0)
      {
        updown=0
    }
      return updown
   }



      function landingAnimation() {
          var w = window.innerWidth;

        setTimeout(function() {
          if (i < 8) {
             document.getElementById("ani1").innerHTML+= res[i]
          }else if (i > 18) {
            document.getElementById("ani3").innerHTML+= res[i]
          }else {
            document.getElementById("ani2").innerHTML+= res[i]
          }
          i++;

          if (i <res.length) {
            landingAnimation();
          }
        }, 100)

      setTimeout(function(){
        document.getElementById("ani1").style.transform = "translateX(-100vw)";
        document.getElementById("ani3").style.transform = "translateX(100vw)";

        setTimeout(function(){
          document.getElementById("ani2").style.transform = "scale(1.5,1.5)";
          document.getElementById('ani2').style.color = "#2d2d2d";

          setTimeout(function(){
            if (w>768) {
              document.getElementById("ani2").style.marginLeft = "5.05em";
            }

            document.getElementById("ani3").style.display = "none";
            document.getElementById("ani1").style.display = "none";
          },1000)
        },200)
          document.getElementById("ani2").addEventListener("mouseover", mouseOver);
          document.getElementById("ani2").addEventListener("mouseout", mouseOut);


          function mouseOver() {
          document.getElementById("ani2").style.transitionDuration = "0.15s";
          document.getElementById("ani2").style.color = "#6b6b6b";
          document.getElementById("ani2").style.backgroundColor = "#7ee8d4";
          }

          function mouseOut() {
            document.getElementById("ani2").style.color = "#2b2b2b";
           document.getElementById("ani2").style.backgroundColor = "#00AD9F";
           }


      }, 3300)


      }










 document.getElementById("body").addEventListener("wheel", change);


//Phone Scripts____________________________________________________________________________



function menuPop(){

  var burger = document.getElementById("links");
     burger.classList.toggle("burger-active");










}


document.getElementById("burgerMenu").addEventListener("click", menuPop);
