var previousDot=0
const aboutChild = document.getElementById('aboutChild').children
const dotsChild = document.getElementById('dots').children
const itemLeft = aboutChild[0].children[0];
const itemRight = aboutChild[1].children[0];
const aniCheck = document.getElementById("aniCheck");
var a = () => {return window.innerWidth < 812};
a = a();
var translateFirst
var translateSecond
var translateThird

listenResize()


function switchContnent(){

for (let i = 0; i < dotsChild.length; i++) {
  let dot = dotsChild[i];

  dot.addEventListener("click", function(){
    dotsChild[previousDot].style.backgroundColor = "#2d2d2d"
    dotsChild[i].style.backgroundColor = "#5193F4"


  if (i!=previousDot) {
    aboutChild[0].childNodes[1].style.transform= translateFirst;
    aboutChild[1].childNodes[1].style.transform= translateSecond;

    aniCheck.addEventListener("transitionend", function(){
      switch (i) {
        case 0:
            itemLeft.innerHTML= "The HyperText Markup Language, or HTML(HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
            itemRight.innerHTML= "<img src='./media/kofetarica.jpg' alt=''>"

          break;

        case 1:
            itemLeft.innerHTML="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
            itemRight.innerHTML= "<img src='./media/vangogh.jpg' alt=''>"

          break;

        case 2:
              itemLeft.innerHTML="JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
              itemRight.innerHTML= "<img src='./media/scream.jpg' alt=''>"

            break;
      }


      aboutChild[0].childNodes[1].style.transform= translateThird;
      aboutChild[1].childNodes[1].style.transform= translateThird;
  },{once:true})
 }
      previousDot=i;
    });
}
}


function listenResize(){
  if (window.innerWidth<812 && a==true ) {
    a =false
     translateFirst= "translateY(110%)"
     translateSecond="translateY(-110%)"
     translateThird="translateY(0%)"
  }else if(window.innerWidth>812 && a==false ){
      a= true
       translateFirst= "translateX(110%)"
       translateSecond="translateX(-110%)"
       translateThird="translateX(0%)"
  }
}


aniCheck.addEventListener('animationend', switchContnent);

window.addEventListener('resize', listenResize);
