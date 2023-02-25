/* Variables */
const temp = parseInt(document.querySelector("#temperature").textContent);
const windSpeed = parseInt(document.querySelector("#wind-speed").textContent);
const windChillElmnt = document.querySelector("#wind-chill");
const tempF = (temp * 9 / 5 ) + 32;
const windSpeedMph = windSpeed / 1.609;

/* Add to element */
if (tempF<=50 && windSpeedMph>3.0) {
    let windChillF = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16);
    let windChillC = (windChillF - 32) * 5 / 9;
    windChillElmnt.textContent = parseFloat(windChillC).toFixed(2) + " ℃";
} else {
    windChillElmnt.textContent = "N/A";
}