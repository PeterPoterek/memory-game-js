import JSConfetti from "js-confetti";

import calculateScore from "./calculateScore.js";
import { getWrongGuesses } from "./globalVariables.js";
import { winScreen, scoreNumberDisplay, scoreTextDisplay } from "./uiVariables.js";
import { stopTimer } from "./timer.js";
import { getFruitsArr } from "./fruitsArr.js";
import { getElapsedTime } from "./timer.js";

const jsConfetti = new JSConfetti();

const showWinScreenDelay = 500;

const handleWin = async () => {
  stopTimer();
  await jsConfetti.addConfetti({ emojis: getFruitsArr() });

  const score = calculateScore(getElapsedTime(), getWrongGuesses());

  scoreTextDisplay.textContent = "Your score was: ";
  scoreNumberDisplay.textContent = score;
  scoreTextDisplay.append(scoreNumberDisplay);

  setTimeout(() => {
    winScreen.classList.replace("hidden", "flex");
  }, showWinScreenDelay);
};

export default handleWin;
