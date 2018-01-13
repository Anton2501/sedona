var bookingPopup = document.querySelector('.booking-popup');
var openPopupBtn = document.querySelector('.booking__search-btn');
var closePopupBtn = document.querySelector('.booking-popup__close-btn');

closePopupBtn.addEventListener('click', function (event) {
  event.preventDefault();
  bookingPopup.classList.remove('booking-popup--show');
})

openPopupBtn.addEventListener('click', function (event) {
  event.preventDefault();
  bookingPopup.classList.add('booking-popup--show');
})