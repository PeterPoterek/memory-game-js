import "animate.css";
import JSConfetti from "js-confetti";

import { startTimer, stopTimer, setElapsedTime } from "./timer.js";
import { cardContainer, cards, startButton, startScreen, playAgainButton, wrongGuessesDisplay } from "./uiVariables.js";

const fruits = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const jsConfetti = new JSConfetti();

const fruitPairs = fruits.flatMap((fruit) => [fruit, fruit]);

let shuffledfruitsArr = fruitPairs.sort(() => Math.random() - 0.5);

let wrongGuesses = 0;

const cardWrapperClasses = ["transition", "ease-in-out", "hover:-translate-y-1", "hover:scale-105"];

let currentPairCheck = [];
let isProcessing = false;

const cardSameAnimDelay = 500;
const cardDiffrentAnimDelay = 1500;

const winScreen = document.querySelector("#win-screen");
const showWinScreenDelay = 100;

const shuffleFruits = () => {
  cards.forEach((card, i) => {
    const front = card.querySelector(".front");
    front.textContent = shuffledfruitsArr[i];
  });
};

let pairGuessed = 0;

const handleStartButtonClick = () => {
  startScreen.classList.add("hidden");
  wrongGuesses = 0;
  startTimer();
};

const handlePlayAgainButtonClick = () => {
  setElapsedTime(0);
  pairGuessed = 0;
  currentPairCheck = [];
  isProcessing = false;

  cards.forEach((card) => {
    card.classList.remove("pointer-events-none");
    card.classList.add("rotate");

    card.children[0].classList.replace("bg-emerald-400", "bg-gray-700");
  });

  winScreen.classList.replace("flex", "hidden");
  shuffledfruitsArr = fruitPairs.sort(() => Math.random() - 0.5);

  setTimeout(() => {
    shuffleFruits();
  }, 1000);
  startTimer();
};

startButton.addEventListener("click", handleStartButtonClick);
playAgainButton.addEventListener("click", handlePlayAgainButtonClick);

const handleWin = async () => {
  stopTimer();
  await jsConfetti.addConfetti({ emojis: fruits });

  setTimeout(() => {
    winScreen.classList.replace("hidden", "flex");
  }, showWinScreenDelay);
};

const addGuessedPair = () => {
  pairGuessed++;
  if (pairGuessed === fruitPairs.length / 2) {
    handleWin();
  }
};

shuffleFruits();

const handleCardsSame = (currentPairCheck) => {
  const [firstCard, secondCard] = currentPairCheck;

  const firstCardFront = firstCard.children[0];
  const secondCardFront = secondCard.children[0];

  setTimeout(() => {
    firstCard.classList.add("pointer-events-none");
    firstCardFront.classList.replace("bg-gray-700", "bg-emerald-400");

    secondCard.classList.add("pointer-events-none");
    secondCardFront.classList.replace("bg-gray-700", "bg-emerald-400");

    currentPairCheck.length = 0;

    isProcessing = false;
  }, cardSameAnimDelay);
  addGuessedPair();
};
const handleCardsDiffrent = (currentPairCheck) => {
  const [firstCard, secondCard] = currentPairCheck;

  wrongGuesses++;

  wrongGuessesDisplay.textContent = wrongGuesses;

  setTimeout(() => {
    firstCard.children[0].classList.replace("bg-gray-700", "bg-red-500");
    secondCard.children[0].classList.replace("bg-gray-700", "bg-red-500");
  }, cardSameAnimDelay);

  setTimeout(() => {
    firstCard.classList.toggle("rotate");
    secondCard.classList.toggle("rotate");

    firstCard.classList.remove("pointer-events-none");
    secondCard.classList.remove("pointer-events-none");

    firstCard.parentNode.classList.add(...cardWrapperClasses);
    secondCard.parentNode.classList.add(...cardWrapperClasses);

    firstCard.children[0].classList.replace("bg-red-500", "bg-gray-700");
    secondCard.children[0].classList.replace("bg-red-500", "bg-gray-700");

    isProcessing = false;
  }, cardDiffrentAnimDelay);

  currentPairCheck.length = 0;
};

cardContainer.addEventListener("click", (e) => {
  const clickedCard = e.target.closest(".card");
  const clickedCardWrapper = e.target.closest(".cardWrapper");

  if (clickedCard && !isProcessing) {
    if (currentPairCheck.length < 2) {
      // 1 card is selected
      clickedCard.classList.toggle("rotate");
      currentPairCheck.push(clickedCard);

      clickedCard.classList.add("pointer-events-none");
      clickedCardWrapper.classList.remove(...cardWrapperClasses);
    }

    if (currentPairCheck.length === 2) {
      //2 cards are selected - compare
      isProcessing = true;

      const firstCardIcon = currentPairCheck[0].children[0].textContent;
      const secondCardIcon = currentPairCheck[1].children[0].textContent;

      firstCardIcon === secondCardIcon ? handleCardsSame(currentPairCheck) : handleCardsDiffrent(currentPairCheck);
    }
  }
});