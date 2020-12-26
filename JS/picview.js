var eventNode;

document.getElementById("gallery").addEventListener('click', function(e){

    if (e.target.nodeName == "IMG") {

       eventNode = e.target.parentNode
      document.getElementById("displayItem").innerHTML = e.target.outerHTML
      document.getElementById("overlay").classList.toggle("previewOverlay-active");

    }

    document.getElementById("nextPicture").addEventListener('click', next);

    document.getElementById("previousPicture").addEventListener('click', previous);

 });



      document.getElementById("exitOverlay").addEventListener('click', function(){
              console.log("works");
              document.getElementById("overlay").classList.toggle("previewOverlay-active");
              document.getElementById("displayItem").innerHTML = ""

            });



function next(){

for (var i = 0; i < gallery.children.length; i++) {
  if (eventNode === gallery.children[i]) {

    if (i == gallery.children.length-1) {
      i=-1
    }
    eventNode= gallery.children[i+1];
    document.getElementById("displayItem").innerHTML = eventNode.children[0].outerHTML;
    console.log(i);
    break;
    }
  }
}



function previous(){

for (var i = 0; i < gallery.children.length; i++) {
  if (eventNode === gallery.children[i]) {

    if (i == 0) {
      i=7
    }
    eventNode= gallery.children[i-1];
    document.getElementById("displayItem").innerHTML = eventNode.children[0].outerHTML;
    console.log(i);
    break;
    }
  }
}
