import "animate.css";

const container = document.querySelector("#container");

const fruits = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const fruitPairs = fruits.flatMap((fruit) => {
  return [fruit, fruit];
});

const shuffledfruits = fruitPairs.sort(() => Math.random() - 0.5);

const cardContainer = document.querySelector(".cardContainer");
const card = document.querySelector(".card");

const cardsFront = document.querySelectorAll(".front");

cardsFront.forEach((card, i) => {
  card.textContent = shuffledfruits[i];
});

cardContainer.addEventListener("click", () => {
  card.classList.toggle("rotate");
});
