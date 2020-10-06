$(document).ready(function(){
    $('.feedback-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

let disableScroll = function() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    document.body.classList.toggle('scroll-lock')
    document.body.style.paddingRight = paddingOffset
}

let burger = document.querySelector('.menu-icon').addEventListener('click', function() {
    let menu = document.querySelector('.menu')
    this.classList.toggle('menu-icon__active')
    menu.classList.toggle('menu__active')
    disableScroll()

    let links = document.querySelectorAll('.menu__link').forEach(element => {
        element.onclick = () => {
            menu.classList.toggle('menu__active')
            this.classList.toggle('menu-icon__active')
            disableScroll()
        }
    })
})

const submitButton = document.querySelectorAll('.submit').forEach(element => {

    const success = document.querySelector('.success-popup')
    const error = document.querySelector('.error-popup')
    const popubBG = document.querySelector('.popup-bg')

    element.addEventListener('click', (event) => {
        event.preventDefault()
        success.classList.toggle('popup__active')
        popubBG.classList.toggle('popup-bg__active')
    })
    popubBG.addEventListener('click', () => {
        popubBG.classList.remove('popup-bg__active')
        success.classList.remove('popup__active')
    })
})