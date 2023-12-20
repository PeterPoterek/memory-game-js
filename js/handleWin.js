import JSConfetti from "js-confetti";
import calculateScore from "./calculateScore.js";
import { getWrongGuesses } from "./globalVariables.js";
import { winScreen, scoreNumberDisplay, scoreTextDisplay, highscoreNumberDisplay, highscoreTextDisplay } from "./uiVariables.js";
import { stopTimer } from "./timer.js";
import { getFruitsArr } from "./fruitsArr.js";
import { getElapsedTime } from "./timer.js";

const jsConfetti = new JSConfetti();
const showWinScreenDelay = 500;

const handleWin = async () => {
  stopTimer();
  await jsConfetti.addConfetti({ emojis: getFruitsArr() });

  const score = calculateScore(getElapsedTime(), getWrongGuesses());

  const existingHighscore = localStorage.getItem("highscore");

  if (existingHighscore === null || score > parseInt(existingHighscore)) {
    localStorage.setItem("highscore", score);
    highscoreNumberDisplay.textContent = score;
  } else {
    highscoreNumberDisplay.textContent = existingHighscore;
  }

  scoreTextDisplay.textContent = "Your score was: ";
  scoreNumberDisplay.textContent = score;
  scoreTextDisplay.append(scoreNumberDisplay);

  setTimeout(() => {
    winScreen.classList.replace("hidden", "flex");
  }, showWinScreenDelay);
};

export default handleWin;
