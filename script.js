const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let timeLeft = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
}

let totalSeconds;

  function init() {
        totalSeconds = Math.floor((new Date('01/01/2024') - new Date()) / 1000); 
        setTimeLeft();
        let interval = setInterval(() => {
            if (totalSeconds < 0) {
                clearInterval(interval);
            }
            countTime();
        }, 1000);
    }

 function countTime() {
        if (totalSeconds > 0) {
            --timeLeft.s;
            if (timeLeft.m >= 0 && timeLeft.s < 0) {
                timeLeft.s = 59;
                --timeLeft.m;
                if (timeLeft.h >= 0 && timeLeft.m < 0) {
                    timeLeft.m = 59;
                    --timeLeft.h;
                    if (timeLeft.d >= 0 && timeLeft.h < 0) {
                        timeLeft.h = 23;
                        --timeLeft.d;
                    }
                }
            }
        }
        --totalSeconds;
        printTime();
}
    
function printTime() {
    days.innerText = timeLeft.d;
    hours.innerText = timeLeft.h;
    minutes.innerText = timeLeft.m;
    seconds.innerText = timeLeft.s;
}

   function setTimeLeft() {
        timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
        timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
        timeLeft.m = Math.floor(totalSeconds / (60) % 60);
        timeLeft.s = Math.floor(totalSeconds % 60);
    }

init();