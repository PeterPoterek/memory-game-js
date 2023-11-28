const container = document.querySelector("#container");

const fruits = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const shuffleFruits = () => {};
const fruitPairs = fruits.flatMap((fruit) => {
  return [fruit, fruit];
});

const shuffledfruits = fruitPairs.sort(() => Math.random() - 0.5);

const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
  const cardContent = document.createElement("span");

  cardContent.classList.add("opacity-0", "pointer-events-none");
  cardContent.innerHTML = shuffledfruits[i];

  card.append(cardContent);
});
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("card")) {
    console.log(e.target.innerHTML);
    e.target.querySelector("span").classList.toggle("opacity-0");
    e.target.querySelector("span").classList.add("transition-opacity");
  }
});
