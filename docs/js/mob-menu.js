var menuBtn = document.querySelector(".header__menu-btn");
var header = document.querySelector(".header");


menuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  header.classList.toggle("header--opened");
});