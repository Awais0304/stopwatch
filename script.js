const display = document.querySelector('.display');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

let timer = null;
let milliseconds = 0;

function updateDisplay() {
    const minutes = Math.floor(milliseconds / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((milliseconds % 60000) / 1000).toString().padStart(2, '0');
    const millis = (milliseconds % 1000).toString().padStart(3, '0');
    display.textContent = `${minutes}:${seconds}:${millis}`;
}

function startTimer() {
    timer = setInterval(() => {
        milliseconds += 10;
        updateDisplay();
    }, 10);
    startButton.disabled = true;
    pauseButton.disabled = false;
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    milliseconds = 0;
    updateDisplay();
    startButton.disabled = false;
    pauseButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


updateDisplay();
