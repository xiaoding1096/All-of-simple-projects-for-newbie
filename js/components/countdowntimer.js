const settimeBtn = document.getElementById("settime-btn");
const startPauseBtn = document.getElementById("start-pause-btn");
const timeDisplay = document.getElementById("time-display");
let isPause = true;
let countdown = "";
let time = 0;
settimeBtn.addEventListener("click", () => {
  const userTimeInput = prompt("Write time(second) you want to countdown");
  if (!userTimeInput) {
    return;
  }
  time = parseInt(userTimeInput, 10);
  if (isNaN(time)) {
    alert("Give me a real number!");
    return;
  }

  console.log(`Time: ${time}`);
  updateTime(time);
  isPause = true;
  clearInterval(countdown);
  startPauseBtn.textContent = "Start";
});

function updateTime(time) {
  const userHours = Math.floor(time / 60);
  const userMinutes = time % 60;
  timeDisplay.textContent = `${String(userHours).padStart(2, "0")} : ${String(
    userMinutes
  ).padStart(2, "0")}`;
}

startPauseBtn.addEventListener("click", () => {
  if (isPause) {
    startPauseBtn.textContent = "Pause";
    isPause = false;

    countdown = setInterval(() => {
      time--;
      updateTime(time);
      if (time <= 0) {
        clearInterval(countdown);
        time = 0;
        timeDisplay.textContent = "00 : 00";
        startPauseBtn.textContent = "Start";
        isPause = true;
      }
    }, 1000);
  } else {
    startPauseBtn.textContent = "Resume";
    isPause = true;
    clearInterval(countdown);
    console.log("Countdown Paused");
  }
});

startPauseBtn.addEventListener("click", () => {
  if (isPause) {
    startPauseBtn.textContent = "Pause";
    isPause = false;
    countdown = setInterval(() => {
      time--;
      updateTime(time);
      if (time <= 0) {
        clearInterval(countdown);
        time = 0;
        isPause = true;
        timeDisplay.textContent = "00 : 00";
        startPauseBtn.textContent = "start";
      }
    });
  } else {
    startPauseBtn.textContent = "Resume";
    isPause = true;
    clearInterval(countdown);
  }
});
