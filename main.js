import "animate.css";

const container = document.querySelector("#container");

const fruits = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const fruitPairs = fruits.flatMap((fruit) => [fruit, fruit]);

const shuffledfruits = fruitPairs.sort(() => Math.random() - 0.5);

const cardContainer = document.querySelector(".cardContainer");
const cards = document.querySelectorAll(".card");

let currentPairCheck = [];

cards.forEach((card, i) => {
  const front = card.querySelector(".front");
  front.textContent = shuffledfruits[i];
});

const handleCardsSame = (currentPairCheck) => {
  const [firstCard, secondCard] = currentPairCheck;

  const firstCardIcon = firstCard.children[0].textContent;
  const secondCardIcon = secondCard.children[0].textContent;

  console.log(`${firstCardIcon} ${secondCardIcon} - Same`);
};
const handleCardsDiffrent = (currentPairCheck) => {
  const [firstCard, secondCard] = currentPairCheck;

  const firstCardIcon = firstCard.children[0].textContent;
  const secondCardIcon = secondCard.children[0].textContent;

  console.log(`${firstCardIcon} ${secondCardIcon} - Diffrent`);
};

cardContainer.addEventListener("click", (e) => {
  const clickedCard = e.target.closest(".card");

  if (clickedCard) {
    if (currentPairCheck.length < 2) {
      // 1 card is selected
      clickedCard.classList.toggle("rotate");
      currentPairCheck.push(clickedCard);

      clickedCard.classList.add("pointer-events-none");
    }

    if (currentPairCheck.length === 2) {
      //2 cards are selected - compare

      const firstCard = currentPairCheck[0].children[0].textContent;
      const secondCard = currentPairCheck[1].children[0].textContent;

      firstCard === secondCard ? handleCardsSame(currentPairCheck) : handleCardsDiffrent(currentPairCheck);
    }
  }
});

setInterval(() => {
  if (currentPairCheck[0]) {
    console.log(currentPairCheck[0].children[0].textContent);
  }
  if (currentPairCheck[1]) {
    console.log(currentPairCheck[1].children[0].textContent);
  }
}, 1000);
