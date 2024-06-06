const linksURL = "data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.companies);
}

function displayLinks(companies) {
    const container = document.querySelector('#directory-article');
    container.innerHTML = ''; // Clear existing content

    companies.forEach(company => {
        const companySection = document.createElement('section');
        container.appendChild(companySection);

        const companyImage = document.createElement('img');
        companyImage.setAttribute("src", `images/members/${company.image}`);
        companySection.appendChild(companyImage);

        const companyName = document.createElement('h3');
        companyName.innerHTML = company.name;
        companySection.appendChild(companyName);

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

// Directory View Selection

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory-article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

