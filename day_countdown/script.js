// select element
const Days = document.querySelector('#days');
const Hours = document.querySelector('#hours');
const Minutes = document.querySelector('#minutes');
const Seconds = document.querySelector('#seconds');

function countDown() {
    const offerTime = new Date("21 February 2024 12:00:00 PM");
    const currentTime = new Date();
    const totalRemainingTime = offerTime - currentTime;

    const totalRemainingSeconds = Math.floor(totalRemainingTime / 1000);
    const totalRemainingMinutes = Math.floor(totalRemainingSeconds / 60);
    const totalRemainingHours = Math.floor(totalRemainingMinutes / 60);
    const totalRemainingDays = Math.floor(totalRemainingHours / 24);

    const hoursRemain = totalRemainingHours % 24;
    const minutesRemain = totalRemainingMinutes % 60;
    const secondsRemain = totalRemainingSeconds % 60;

    Days.innerHTML = totalRemainingDays;
    Hours.innerHTML = hoursRemain;
    Minutes.innerHTML = minutesRemain;
    Seconds.innerHTML = secondsRemain;
}

countDown();

setInterval(countDown, 1000);