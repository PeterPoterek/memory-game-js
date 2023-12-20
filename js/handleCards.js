import { setIsProcessing, setWrongGuesses, getWrongGuesses, setPairGuessed, getPairGuessed } from "./globalVariables";
import handleWin from "./handleWin.js";

import { wrongGuessesDisplay } from "./uiVariables";

import { getFruitPairs } from "./fruitsArr.js";

const cardSameAnimDelay = 500;
const cardDiffrentAnimDelay = 1500;

const cardWrapperClasses = ["transition", "ease-in-out", "hover:-translate-y-1", "hover:scale-105"];

const addGuessedPair = () => {
  setPairGuessed(getPairGuessed() + 1);

  if (getPairGuessed() === getFruitPairs().length / 2) {
    handleWin();
  }
};

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

    setIsProcessing(false);
  }, cardSameAnimDelay);
  addGuessedPair();
};

const handleCardsDiffrent = (currentPairCheck) => {
  const [firstCard, secondCard] = currentPairCheck;

  setWrongGuesses(getWrongGuesses() + 1);

  wrongGuessesDisplay.textContent = getWrongGuesses();

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

    setIsProcessing(false);
  }, cardDiffrentAnimDelay);

  currentPairCheck.length = 0;
};

export { handleCardsSame, handleCardsDiffrent };
