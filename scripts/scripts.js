const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');

})