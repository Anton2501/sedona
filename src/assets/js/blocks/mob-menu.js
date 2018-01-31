(function() {
  var menuBtn = $(".header__menu-btn");
  var menu = $(".header__navigation");

  menuBtn.click(function (event) {
    event.preventDefault();
    menuBtn.toggleClass("header__menu-btn--opened");
    menu.toggleClass("header__navigation--opened");  
  });
})();
