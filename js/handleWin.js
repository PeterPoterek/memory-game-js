import JSConfetti from "js-confetti";

import { winScreen } from "./uiVariables.js";
import { stopTimer } from "./timer.js";
import { getFruitsArr } from "./fruitsArr.js";

const jsConfetti = new JSConfetti();

const showWinScreenDelay = 100;

const handleWin = async () => {
  stopTimer();
  await jsConfetti.addConfetti({ emojis: getFruitsArr() });

  setTimeout(() => {
    winScreen.classList.replace("hidden", "flex");
  }, showWinScreenDelay);
};

export default handleWin;
