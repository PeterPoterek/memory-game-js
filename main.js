import "animate.css";

const fruits = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const fruitPairs = fruits.flatMap((fruit) => [fruit, fruit]);

const shuffledfruits = fruitPairs.sort(() => Math.random() - 0.5);

const cardContainer = document.querySelector(".cardContainer");
const cards = document.querySelectorAll(".card");

let currentPairCheck = [];
let isProcessing = false;

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
  }, 500);
};
const handleCardsDiffrent = (currentPairCheck) => {
  const [firstCard, secondCard] = currentPairCheck;

  const firstCardFront = firstCard.children[0].textContent;
  const secondCardFront = secondCard.children[0].textContent;

  setTimeout(() => {
    firstCard.classList.toggle("rotate");
    secondCard.classList.toggle("rotate");

    firstCard.classList.remove("pointer-events-none");
    secondCard.classList.remove("pointer-events-none");

    console.log(`${firstCardFront} ${secondCardFront} - Diffrent`);
    isProcessing = false;
  }, 1000);
  currentPairCheck.length = 0;
};

cardContainer.addEventListener("click", (e) => {
  const clickedCard = e.target.closest(".card");

  if (clickedCard && !isProcessing) {
    if (currentPairCheck.length < 2) {
      // 1 card is selected
      clickedCard.classList.toggle("rotate");
      currentPairCheck.push(clickedCard);

      clickedCard.classList.add("pointer-events-none");
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
