var previousDot=0
const aboutChild = document.getElementById('aboutChild').children
const dotsChild = document.getElementById('dots').children
const itemLeft = aboutChild[0].children[0];
var itemRight = aboutChild[1].children[0].children[0];

aniCheck = document.getElementById("aniCheck");
function switchContnent(){



for (let i = 0; i < dotsChild.length; i++) {
  let dot = dotsChild[i];

  dot.addEventListener("click", function(){
    dotsChild[previousDot].style.backgroundColor = "#2d2d2d"
    dotsChild[i].style.backgroundColor = "#5193F4"


  if (i!=previousDot) {
    aboutChild[0].childNodes[1].style.transform= "translateX(110%)";
    aboutChild[1].childNodes[1].style.transform= "translateX(-110%)";

    aniCheck.addEventListener("transitionend", function(){
      console.log(itemRight);
      switch (i) {
        case 0:
            itemLeft.innerHTML= "The HyperText Markup Language, or HTML(HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
            itemRight.outerHTML= "<img src='./media/kofetarica.jpg' alt=''>"
             itemRight = aboutChild[1].children[0].children[0];
          break;

        case 1:
            itemLeft.innerHTML="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
            itemRight.outerHTML= "<img src='./media/vangogh.jpg' alt=''>"
             itemRight = aboutChild[1].children[0].children[0];
          break;

        case 2:
              itemLeft.innerHTML="JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
              itemRight.outerHTML= "<img src='./media/scream.jpg' alt=''>"
               itemRight = aboutChild[1].children[0].children[0];
            break;
      }


      aboutChild[0].childNodes[1].style.transform= "translateX(0%)";
      aboutChild[1].childNodes[1].style.transform= "translateX(0%)";
  },{once:true})
 }
      previousDot=i;
    });
}
}


aniCheck.addEventListener('animationend', function() {
  switchContnent()
});
