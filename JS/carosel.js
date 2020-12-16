const allCaroselss = {

    carosel1: {

        images: document.getElementById("carosel1Slide").childElementCount,
        count: 1
      },

        carosel2: {

            images: document.getElementById("carosel2Slide").childElementCount,
            count: 1
            }
 };


for (var i = 0; i < document.getElementsByClassName("nextbutton").length; i++) {

    let caroselId = document.getElementsByClassName("nextbutton")[i].parentNode.id
    let slider = document.getElementById(caroselId+"Slide");
    slider.style.transform = "translateX(-"+ document.getElementById(caroselId).clientWidth +"px)";

document.getElementsByClassName("nextbutton")[i].addEventListener('click', function(i){




var slider = document.getElementById(caroselId+"Slide");

console.log(caroselId,"next");

allCaroselss[caroselId].count++


if(allCaroselss[caroselId].count>allCaroselss[caroselId].images -1){
  allCaroselss[caroselId].count--
}


var size = document.getElementById(caroselId).clientWidth * allCaroselss[caroselId].count




  console.log(allCaroselss[caroselId].count);

slider.style.transition = "all ease 0.4s";
slider.style.transform = "translateX(-"+ size +"px)";


  slider.addEventListener('transitionend', () => {

    if (allCaroselss[caroselId].count==allCaroselss[caroselId].images -1) {
    allCaroselss[caroselId].count=1;
    slider.style.transition = "none";
    slider.style.transform = "translateX(-"+ document.getElementById(caroselId).clientWidth +"px)";
     }
    });





});

 }


for (var i = 0; i < document.getElementsByClassName("nextbutton").length; i++){
    let caroselId = document.getElementsByClassName("nextbutton")[i].parentNode.id
    document.getElementsByClassName("previousbutton")[i].addEventListener('click', function(i){

    console.log(caroselId,"back");
    var slider = document.getElementById(caroselId+"Slide");

    allCaroselss[caroselId].count--

    if(allCaroselss[caroselId].count<0){
      allCaroselss[caroselId].count++
    }


    var size = document.getElementById(caroselId).clientWidth * allCaroselss[caroselId].count

    slider.style.transition = "all ease 0.4s";
    slider.style.transform = "translateX(-"+ size +"px)";


    slider.addEventListener('transitionend', () => {

      if (allCaroselss[caroselId].count==0) {
      allCaroselss[caroselId].count= allCaroselss[caroselId].images -2;

      slider.style.transition = "none";
      slider.style.transform = "translateX(-"+ document.getElementById(caroselId).clientWidth*allCaroselss[caroselId].count +"px)";
       }
      });

    });

 }
