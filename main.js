import "animate.css";

const fruits = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const fruitPairs = fruits.flatMap((fruit) => [fruit, fruit]);

const shuffledfruits = fruitPairs.sort(() => Math.random() - 0.5);

const cardContainer = document.querySelector(".cardContainer");
const cards = document.querySelectorAll(".card");

const cardWrapperClasses = ["transition", "ease-in-out", "hover:-translate-y-1", "hover:scale-105"];

let currentPairCheck = [];
let isProcessing = false;

const cardSameAnimDelay = 500;
const cardDiffrentAnimDelay = 1500;

cards.forEach((card, i) => {
  const front = card.querySelector(".front");
  front.textContent = shuffledfruits[i];
});

const handleCardsSame = (currentPairCheck) => {
  const [firstCard, secondCard] = currentPairCheck;

  const firstCardIcon = firstCard.children[0].textContent;
  const secondCardIcon = secondCard.children[0].textContent;

  const firstCardFront = firstCard.children[0];
  const secondCardFront = secondCard.children[0];

  setTimeout(() => {
    firstCard.classList.add("pointer-events-none");
    firstCardFront.classList.replace("bg-gray-700", "bg-emerald-400");

    secondCard.classList.add("pointer-events-none");
    secondCardFront.classList.replace("bg-gray-700", "bg-emerald-400");

    console.log(`${firstCardIcon} ${secondCardIcon} - Same`);
    currentPairCheck.length = 0;
    isProcessing = false;
  }, cardSameAnimDelay);
};
const handleCardsDiffrent = (currentPairCheck) => {
  const [firstCard, secondCard] = currentPairCheck;

  const firstCardFront = firstCard.children[0].textContent;
  const secondCardFront = secondCard.children[0].textContent;

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

    console.log(`${firstCardFront} ${secondCardFront} - Diffrent`);
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

setInterval(() => {
  console.log(currentPairCheck.length);
  if (currentPairCheck[0]) {
    console.log(currentPairCheck[0].children[0].textContent);
  }
  if (currentPairCheck[1]) {
    console.log(currentPairCheck[1].children[0].textContent);
  }
}, 1000);
