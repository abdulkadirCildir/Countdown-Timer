const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const today = document.getElementById("today");
const clock = document.getElementById("clock");


const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 60 / 60 / 24);
    const hours = Math.floor(totalSeconds / 60 / 60) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


    let weekday = ['Sunday',
               'Monday',
               'Tuesday',
               'Wednesday',
               'Thursday',
               'Friday',
               'Saturday'][new Date().getDay()];
    today.innerHTML = String(currentDate.getDate()).padStart(2, "0") + " . " + String(currentDate.getMonth() + 1).padStart(2, "0") + " . " + currentDate.getFullYear() + " " + weekday

    clock.innerHTML = new Date().toLocaleTimeString();

    console.log(days, hours, minutes, seconds);
}

countdown();

setInterval(countdown, 1000);