const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
});

const myBtn = document.querySelector('#darkBtn');
const mainElemnent = document.querySelector('#main');
myBtn.addEventListener('click', () => {
    mainElemnent.classList.toggle('dark');
});