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

/* Hamburger Menu */
function toggleMenu() {
	if (document.getElementById('responsive-nav').classList.contains('open')) {
		document.getElementById('responsive-nav').classList.replace("open", "hide");
	} else {
		document.getElementById('responsive-nav').classList.replace("hide", "open");
	}
	document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

/* Banner on top */
const today = new Date();
const bannerElmnt = document.getElementById('banner');
let weekday = today.getDay();

function displayBanner() {
	if (weekday == 1) {
		bannerElmnt.classList.replace("hide", "show-banner");
	} else if (weekday == 2) {
		bannerElmnt.classList.replace("hide", "show-banner");
	}
}

displayBanner();