next = document.getElementById("nextButton");
back = document.getElementById("backButton");
var allCarosels = [["something",0],["carosel1",0]]




 next.addEventListener("click", () =>{

var caroselId = next.parentNode.id;
var nmchild = document.getElementById(caroselId+"Slide").childElementCount;
var slider = document.getElementById(caroselId+"Slide");
var count = allCarosels[match(caroselId)][1] +1
if(count>nmchild-1){
  count = count -1
}
  allCarosels[match(caroselId)][1] = count;
 console.log(count);

var size = document.getElementById(caroselId).clientWidth * count





slider.style.transition = "all ease 0.4s";
slider.style.transform = "translateX(-"+ size +"px)";





});



back.addEventListener("click", () =>{

var caroselId = next.parentNode.id;
var nmchild = document.getElementById(caroselId+"Slide").childElementCount;
var slider = document.getElementById(caroselId+"Slide");

var count = allCarosels[match(caroselId)][1] -1
if(count<0){
  count = 0
}
  allCarosels[match(caroselId)][1] = count;
console.log(count);
var slider = document.getElementById(caroselId+"Slide");
var size = document.getElementById(caroselId).clientWidth * count
slider.style.transform = "translateX(-"+ size +"px)";

});




function match(id){
  for (var i = 0; i < allCarosels.length; i++) {
     allCarosels[i]
     if (allCarosels[i].indexOf(id)!= -1){
       return i
      }
  }
};
