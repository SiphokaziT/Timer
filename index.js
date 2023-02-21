const startminutes = 10;
let time = startminutes * 60;

const countdownEL = document.getElementById('counter');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEL.innerHTML = `${minutes}: ${seconds}`;
    time--;
}



