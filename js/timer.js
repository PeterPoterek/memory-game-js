let elapsedTime = 0;
let timerInterval;

const timerDisplay = document.querySelector("#timer");

const setElapsedTime = (value) => {
  elapsedTime = value;
};
const getElapsedTime = () => {
  return elapsedTime;
};

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let formattedTime = "";

  if (hours > 0) {
    formattedTime += `${hours} Hour${hours !== 1 ? "s" : ""} `;
  }

  if (minutes > 0 || (hours > 0 && remainingSeconds > 0)) {
    formattedTime += `${minutes} Minute${minutes !== 1 ? "s" : ""} `;
  }

  if (remainingSeconds > 0 || (hours === 0 && minutes === 0)) {
    formattedTime += `${remainingSeconds} Second${remainingSeconds !== 1 ? "s" : ""}`;
  }

  return formattedTime.trim();
};

const startTimer = () => {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    elapsedTime++;
    timerDisplay.textContent = formatTime(elapsedTime);
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
};

export { startTimer, stopTimer, setElapsedTime };
