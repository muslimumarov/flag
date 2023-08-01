var elButtonHd = document.querySelector(".site-header__button");
var elSelectHr = document.querySelector("placeholder");
var elHeaderLogo = document.querySelector(".header-logo");
elButtonHd.addEventListener("click" , function(){
  document.body.classList.toggle("dark");
 elSelectHr.document.classList.toggle("dark");
 elHeaderLogo.document.classList.toggle("dark");
})