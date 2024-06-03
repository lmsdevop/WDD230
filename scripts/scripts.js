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
myBtn.addEventListener('click', () => {
    mainElement.classList.toggle('dark');
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


// Weather API
const apiKey = "f38477611aeab9350638425de1c982fb"
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=-22.9028&lon=-43.2075&units=imperial&appid=${apiKey}`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            currentTemp.innerText = `${parseInt(data.main.temp)}°F`;
            weatherIcon.setAttribute("src", ` https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            weatherDesc.innerText = data.weather[0].main;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
