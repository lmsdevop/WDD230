const sidebarContent = document.getElementById('sidebar-content');

// Function to get the number of days between two dates
function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((date2 - date1) / oneDay));
}

const currentDate = new Date();
const lastVisitDate = localStorage.getItem('lastVisitDate');
if (!lastVisitDate) {
    sidebarContent.innerText = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisit = new Date(lastVisitDate);

    const daysDifference = daysBetween(lastVisit, currentDate);

    if (daysDifference < 1) {
        sidebarContent.innerText = "Back so soon! Awesome!";
    } else {
        sidebarContent.innerText = `You last visited ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago.`;
    }
}

localStorage.setItem('lastVisitDate', currentDate.toISOString());