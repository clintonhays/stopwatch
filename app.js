// Global Variables

let ms = 0,
  s = 0,
  m = 0;
const stopwatch = document.querySelector(".stopwatch");
const startPauseButton = document.querySelector(".startAndPause");
const resetButton = document.querySelector(".reset");
let timer;

const getTimer = () => {
  return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
};

const start = () => {
  if (!timer) {
    timer = setInterval(run, 10);
  }
  startPauseButton.innerHTML = `<img src="img/icons8-pause-64.png" alt="pause button" />`;
};

const run = () => {
  ms++;

  stopwatch.textContent = getTimer();

  if (ms === 99) {
    ms = 0;
    s++;
  }

  if (s > 59) {
    s = 0;
    m++;
  }
};

const stopTimer = () => {
  clearInterval(timer);
  timer = false;
};

startPauseButton.addEventListener("click", () => {
  if (!timer) {
    start();
  } else {
    stopTimer();
    startPauseButton.innerHTML = `<img src="img/icons8-play-64(1).png" alt="play button" />`;
  }
});

resetButton.addEventListener("click", () => {
  stopTimer();
  ms = 0;
  s = 0;
  m = 0;
  stopwatch.textContent = getTimer();
});
