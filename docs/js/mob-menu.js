var menuBtn = document.querySelector(".header__menu-btn");
var menu = document.querySelector(".header__navigation");


menuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  menuBtn.classList.toggle("header__menu-btn--opened");
  menu.classList.toggle("header__navigation--opened");  
});