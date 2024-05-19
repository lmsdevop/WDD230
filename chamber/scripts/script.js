const hamburguerButton = document.querySelector('#myButton');
const navField = document.querySelector('#animateme')
hamburguerButton.addEventListener('click', () => {
    hamburguerButton.classList.toggle('open');
    navField.classList.toggle('open');
})

const options = {
    year: "numeric"
}
document.querySelector('#year').innerHTML = new Date().toLocaleString("en-US", options);
document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;
