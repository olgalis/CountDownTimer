var daysHead = document.querySelector('.days');
var hourHead = document.querySelector('.hours'); // Corrected the selector
var minuteHead = document.querySelector('.minutes');
var secondHead = document.querySelector('.seconds');
var dayCard = document.querySelector('#day'); // Corrected the variable name
var hourCard = document.querySelector('#hour');
var minuteCard = document.querySelector('#minute');
var secondCard = document.querySelector('#second');

let days;
let hours;
let minutes;
let seconds;

var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

var x = setInterval(function () {
    // get today's date and time
    var now = new Date().getTime();

    // find the distance between now and the future date
    var distance = countDownDate - now;

    // time calculations for days, hours, minutes, and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated values
    daysHead.innerHTML = days;
    hourHead.innerHTML = hours;
    minuteHead.innerHTML = minutes;
    secondHead.innerHTML = seconds;

    // Check if the countdown is over
    if (distance < 0) {
        clearInterval(x);
        // Optionally, you can display a message or take some action when the countdown is over
        daysHead.innerHTML = 0;
        hourHead.innerHTML = 0;
        minuteHead.innerHTML = 0;
        secondHead.innerHTML = 0;
    }
}, 1000);
