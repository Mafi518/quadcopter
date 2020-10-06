'use strict';

$(document).ready(function () {
    $('.feedback-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

var disableScroll = function disableScroll() {
    var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.toggle('scroll-lock');
    document.body.style.paddingRight = paddingOffset;
};

var burger = document.querySelector('.menu-icon').addEventListener('click', function () {
    var _this = this;

    var menu = document.querySelector('.menu');
    this.classList.toggle('menu-icon__active');
    menu.classList.toggle('menu__active');
    disableScroll();

    var links = document.querySelectorAll('.menu__link').forEach(function (element) {
        element.onclick = function () {
            menu.classList.toggle('menu__active');
            _this.classList.toggle('menu-icon__active');
            disableScroll();
        };
    });
});

var submitButton = document.querySelectorAll('.submit').forEach(function (element) {

    var success = document.querySelector('.success-popup');
    var error = document.querySelector('.error-popup');
    var popubBG = document.querySelector('.popup-bg');

    element.addEventListener('click', function (event) {
        event.preventDefault();
        success.classList.toggle('popup__active');
        popubBG.classList.toggle('popup-bg__active');
    });
    popubBG.addEventListener('click', function () {
        popubBG.classList.remove('popup-bg__active');
        success.classList.remove('popup__active');
    });
});