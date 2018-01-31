(function() {
    var tempScrollTop, currentScrollTop = 0,
        header = $('.header'),
        main = $('.main-content'),
        flag = true,
        current, input;

    $(window).scroll(function(){
      currentScrollTop = $(window).scrollTop();

      if($(window).scrollTop() === 0) {
        flag = true;
        header.removeClass('header--fixed').removeAttr('style');
        main.removeClass('main-content--scrolled');
      }

      if (tempScrollTop < currentScrollTop ) {
        if($(window).scrollTop() >= 400) {
          header.addClass('header--fixed');
          if (flag) {
            header.animate({ top:'0' }, 400);            
            main.addClass('main-content--scrolled');
            flag = false;
          }
        }
      }
      tempScrollTop = currentScrollTop;
    });
  }
)();