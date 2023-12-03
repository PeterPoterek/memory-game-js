import "animate.css";

const container = document.querySelector("#container");

const fruits = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const fruitPairs = fruits.flatMap((fruit) => [fruit, fruit]);

const shuffledfruits = fruitPairs.sort(() => Math.random() - 0.5);

const cardContainer = document.querySelector(".cardContainer");
const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
  const front = card.querySelector(".front");
  front.textContent = shuffledfruits[i];
});

cardContainer.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".card");

  if (clickedCard) {
    clickedCard.classList.toggle("rotate");
  }
});
