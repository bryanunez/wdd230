/* Current Year */
const currentDate = new Date();
let currentYear = null;

currentYear = currentDate.getFullYear();

document.getElementById("year").textContent = currentYear;

/* Last Modified */
let lastModified = new Date(document.lastModified);
let month = lastModified.getMonth() + 1;
let date = lastModified.getDate();
let year = lastModified.getFullYear();

let hours = lastModified.getHours();
let minutes = lastModified.getMinutes();
let seconds = lastModified.getSeconds();

let modifiedDate = `${month}/${date}/${year} | ${hours}:${minutes}:${seconds}`;

document.getElementById("last-modify").textContent = modifiedDate;

/* Date on header */
const topDate = document.getElementById("date");
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(currentDate);
topDate.innerHTML = `<em>${fulldate}</em>`;