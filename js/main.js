import "animate.css";

import { startTimer, setElapsedTime } from "./timer.js";
import { cardContainer, cards, startButton, startScreen, playAgainButton, winScreen } from "./uiVariables.js";

import { setIsProcessing, getIsProcessing, setWrongGuesses, setPairGuessed } from "./globalVariables.js";

import { handleCardsSame, handleCardsDiffrent } from "./handleCards.js";

import { getFruitPairs } from "./fruitsArr.js";

let shuffledfruitsArr = getFruitPairs().sort(() => Math.random() - 0.5);

const cardWrapperClasses = ["transition", "ease-in-out", "hover:-translate-y-1", "hover:scale-105"];

let currentPairCheck = [];

document.body.style.overflow = "hidden";

const shuffleFruits = () => {
  cards.forEach((card, i) => {
    const front = card.querySelector(".front");
    front.textContent = shuffledfruitsArr[i];
  });
};

const handleStartButtonClick = () => {
  setIsProcessing(false);
  setWrongGuesses(0);
  setPairGuessed(0);

  startScreen.classList.add("hidden");
  document.body.style.overflow = "auto";

  startTimer();
};

const handlePlayAgainButtonClick = () => {
  setElapsedTime(0);
  setPairGuessed(0);
  setWrongGuesses(0);

  currentPairCheck = [];
  setIsProcessing(false);

  cards.forEach((card) => {
    card.classList.remove("pointer-events-none");
    card.classList.add("rotate");

    card.children[0].classList.replace("bg-emerald-400", "bg-gray-700");
  });

  winScreen.classList.replace("flex", "hidden");
  shuffledfruitsArr = getFruitPairs().sort(() => Math.random() - 0.5);

  setTimeout(() => {
    shuffleFruits();
  }, 1000);
  startTimer();
};

startButton.addEventListener("click", handleStartButtonClick);
playAgainButton.addEventListener("click", handlePlayAgainButtonClick);

shuffleFruits();

cardContainer.addEventListener("click", (e) => {
  const clickedCard = e.target.closest(".card");
  const clickedCardWrapper = e.target.closest(".cardWrapper");

  if (clickedCard && !getIsProcessing()) {
    if (currentPairCheck.length < 2) {
      // 1 card is selected
      clickedCard.classList.toggle("rotate");
      currentPairCheck.push(clickedCard);

      clickedCard.classList.add("pointer-events-none");
      clickedCardWrapper.classList.remove(...cardWrapperClasses);
    }

    if (currentPairCheck.length === 2) {
      //2 cards are selected - compare
      setIsProcessing(true);

      const firstCardIcon = currentPairCheck[0].children[0].textContent;
      const secondCardIcon = currentPairCheck[1].children[0].textContent;

      currentPairCheck[0].blur();
      currentPairCheck[1].blur();

      firstCardIcon === secondCardIcon ? handleCardsSame(currentPairCheck) : handleCardsDiffrent(currentPairCheck);
    }
  }
});
