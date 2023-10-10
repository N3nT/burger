const faBars = document.querySelector('.fa-bars');
const faTimes = document.querySelector('.fa-times'); 
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

const showAndHide = (params) => {
    faTimes.classList.toggle('hide');
    faBars.classList.toggle('hide');
    burger.classList.toggle('move');
    menu.classList.toggle('move');
}
burger.addEventListener('click', showAndHide);