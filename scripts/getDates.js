const options = {
    year: "numeric"
}
document.querySelector('#year').innerHTML = new Date().toLocaleString("en-US", options);
document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;
