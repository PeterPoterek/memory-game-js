let elapsedTime = 0;
let timerInterval;

const setElapsedTime = (value) => {
  elapsedTime = value;
};
const getElapsedTime = () => {
  return elapsedTime;
};

const startTimer = () => {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    elapsedTime++;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
};

export { startTimer, stopTimer, setElapsedTime, getElapsedTime };
