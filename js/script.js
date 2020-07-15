'use strict';

var modalMap = document.querySelector('.modal-map');
var modalWrite = document.querySelector('.modal-write');

var linkMap = document.querySelector('.contacts-map');
var linkWrite = document.querySelector('.write-us-btn');

var closeMapBtn = modalMap.querySelector('.close-button');
var closeWriteBtn = modalWrite.querySelector('.close-button');

var form = modalWrite.querySelector('form');
var userName = form.querySelector('.user-name');
var email = form.querySelector('.user-email');
var feedbackText = form.querySelector('.feedback-text');

linkMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

linkWrite.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrite.classList.add('modal-show');
  userName.focus();
});

closeMapBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

closeWriteBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrite.classList.remove('modal-show');
});

form.addEventListener('submit', function (evt) {
  if (!userName.value || !email.value || !feedbackText.value) {
    evt.preventDefault();
  }
});

// Promo Slider

var promoSlides = document.querySelectorAll('.slide');
var promoControls = document.querySelectorAll('.slider-control');

for (var i = 0; i < promoControls.length; i++) {
  (function (i) {
    promoControls[i].addEventListener('click', function () {
      for (var j = 0; j < promoSlides.length; j++) {
        promoControls[j].classList.remove('slider-control-active');
        promoSlides[j].classList.remove('slide-active');
      }
      promoControls[i].classList.add('slider-control-active');
      promoSlides[i].classList.add('slide-active');
    });
  })(i);
}

// Services Slider

var serviceSlides = document.querySelectorAll('.services-item');
var serviceControls = document.querySelectorAll('.services-button');

for (var i = 0; i < serviceControls.length; i++) {
  (function (i) {
    serviceControls[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      for (var j = 0; j < serviceSlides.length; j++) {
        serviceControls[j].classList.remove('services-button-active');
        serviceSlides[j].classList.remove('services-item-active');
      }
      serviceControls[i].classList.add('services-button-active');
      serviceSlides[i].classList.add('services-item-active');
    });
  })(i);
}
