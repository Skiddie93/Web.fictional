const burger = document.getElementById("links");

 function menuPop(){
     burger.classList.toggle("burger-active");

}
document.getElementById("burgerMenu").addEventListener("click", menuPop);
