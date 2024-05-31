// Open Menu
const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
});

// Dark Mode
const myBtn = document.querySelector('#darkBtn');
const mainFormElement = document.querySelector('#main-form');
myBtn.addEventListener('click', () => {
    mainFormElement.classList.toggle('dark');
});

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