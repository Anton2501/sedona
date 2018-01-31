(function() {
  var bookingPopup = $('.booking-popup');
  var openPopupBtn = $('.booking__search-btn');
  var closePopupBtn = $('.booking-popup__close-btn');
  var globalOverlay = $('.global-overlay');

  openPopupBtn.click(function (event) {
    event.preventDefault();
    bookingPopup.addClass('booking-popup--show');
    globalOverlay.css('display', 'block');
  });

  closePopupBtn.click(function (event) {
    event.preventDefault();
    bookingPopup.removeClass('booking-popup--show');
    globalOverlay.css('display', 'none');
  });

  //Adult & Children counter:

  var current;
  $('.booking-popup__btn-min').on('click', function(event) {
    event.preventDefault();
    current = +$(this).siblings('input').val();
      input = $(this).siblings('input');
      $(input).val(current - 1);

      if (current < 1) {
          $(input).val(current);
      }
  });

  $('.booking-popup__btn-plus').on('click', function(event) {
      event.preventDefault();
      current = +$(this).siblings('input').val();
      input = $(this).siblings('input');
      $(input).val(current + 1);
  });

})();