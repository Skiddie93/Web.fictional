var eventNode;
const gallery = document.getElementById("gallery");
const displayItem = document.getElementById("displayItem");
const overlay = document.getElementById("overlay");
const nextPicture = document.getElementById("nextPicture");
const previousPicture = document.getElementById("previousPicture")


gallery.addEventListener('click', function(e){

  if (e.target.nodeName == "IMG") {
      eventNode = e.target.parentNode
      displayItem.innerHTML = e.target.outerHTML
      overlay.classList.toggle("previewOverlay-active");
    }
  nextPicture.addEventListener('click', next);
  previousPicture.addEventListener('click', previous);
  });

document.getElementById("exitOverlay").addEventListener('click', function(){
  overlay.classList.toggle("previewOverlay-active");
  displayItem.innerHTML = ""
  });

function next(){
for (var i = 0; i < gallery.children.length; i++) {
  if (eventNode === gallery.children[i]) {
    if (i == gallery.children.length-1) {
      i=-1
    }
  eventNode= gallery.children[i+1];
  displayItem.innerHTML = eventNode.children[0].outerHTML;

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
  displayItem.innerHTML = eventNode.children[0].outerHTML;
    break;
    }
  }
}
