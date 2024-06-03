const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = "data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const container = document.querySelector('#learning-activities');
    container.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekContainer = document.createElement('div');
        container.appendChild(weekContainer);

        const weekHeader = document.createElement('span');
        weekHeader.textContent = week.week;
        weekContainer.appendChild(weekHeader);

        const ul = document.createElement('ul');

        week.links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;
            li.appendChild(a);
            ul.appendChild(li);
        });

        weekContainer.appendChild(ul);
    });
}

getLinks();