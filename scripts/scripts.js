// Open Menu
const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
});

// Dark Mode
const myBtn = document.querySelector('#darkBtn');
const mainElement = document.querySelector('#main');
const mainFormElement = document.querySelector('#main-form');
myBtn.addEventListener('click', () => {
    if (mainElement) {
        mainElement.classList.toggle('dark');
    }
    else {
        mainFormElement.classList.toggle('dark');
    }
});

// Page Visits Display
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);


// FORMS
document.getElementById('myForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password_confirm').value;

    if (password !== passwordConfirm) {
        alert('Passwords do not match!');
        document.getElementById('password').value = '';
        document.getElementById('password_confirm').value = '';
        document.getElementById('password').focus();
        event.preventDefault();
    }
});