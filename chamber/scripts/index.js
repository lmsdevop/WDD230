const linksURL = "data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.companies);
}

function displayLinks(companies) {
    const container = document.querySelector('#spotlights');
    container.innerHTML = ''; // Clear existing content

    companies.forEach(company => {
        const companySection = document.createElement('div');
        container.appendChild(companySection);

        const companyName = document.createElement('h3');
        companyName.innerHTML = company.name;
        companySection.appendChild(companyName);

        const companyQuote = document.createElement('p');
        companyQuote.innerHTML = company.quote;
        companySection.appendChild(companyQuote);

        const companyAddress = document.createElement('p');
        companyAddress.innerHTML = company.address;
        companySection.appendChild(companyAddress);

        const companyPhone = document.createElement('p');
        companyPhone.innerHTML = company.phone;
        companySection.appendChild(companyPhone);

        const companyDetails = document.createElement('a');
        companyDetails.innerHTML = company.website;
        companyDetails.setAttribute("href", `${company.website}`);
        companySection.appendChild(companyDetails);
    });
}

getLinks();

// Weather
const apiKey = "f38477611aeab9350638425de1c982fb"
const currentTemp = document.querySelector('#current-temp');
const windChill = document.querySelector('#wind-chill');
const weatherDesc = document.querySelector('#weather-desc');
const humidityWeather = document.querySelector('#humidity-desc')

const url = `https://api.openweathermap.org/data/2.5/weather?lat=-22.9028&lon=-43.2075&units=imperial&appid=${apiKey}`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            currentTemp.innerText = `${parseInt(data.main.temp)}°F`;
            weatherDesc.innerText = data.weather[0].main;
            humidityWeather.innerHTML = `Humidity: ${data.main.humidity}%`
            windChill.innerHTML = `Wind Chill: ${parseInt(data.main.feels_like)}°F`
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();