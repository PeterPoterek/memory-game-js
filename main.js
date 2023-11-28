const container = document.querySelector("#container");

const fruits = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const shuffleFruits = () => {};
const fruitPairs = fruits.flatMap((fruit) => {
  return [fruit, fruit];
});

const shuffledfruits = fruitPairs.sort(() => Math.random() - 0.5);

const cards = document.querySelectorAll(".card");

let currentPairCheck = [];

cards.forEach((card, i) => {
  const cardContent = document.createElement("span");

  cardContent.classList.add("opacity-0", "pointer-events-none");
  cardContent.innerHTML = shuffledfruits[i];

  card.append(cardContent);
});
container.addEventListener("click", (e) => {
  if (currentPairCheck.length === 2) {
    if (currentPairCheck[0].textContent === currentPairCheck[1].textContent) {
      console.log(`Match ${currentPairCheck[0].textContent} ${currentPairCheck[1].textContent}`);

      currentPairCheck[0].classList.add("bg-emerald-400");
      currentPairCheck[0].classList.add("pointer-events-none");

      currentPairCheck[1].classList.add("bg-emerald-400");
      currentPairCheck[1].classList.add("pointer-events-none");

      currentPairCheck = [];
    } else {
      console.log(`Diffrent ${currentPairCheck[0].textContent} ${currentPairCheck[1].textContent}`);

      currentPairCheck[0].querySelector("span").classList.toggle("opacity-0");
      currentPairCheck[0].querySelector("span").classList.add("transition-opacity");

      currentPairCheck[1].querySelector("span").classList.toggle("opacity-0");
      currentPairCheck[1].querySelector("span").classList.add("transition-opacity");

      currentPairCheck = [];
    }
  } else {
    if (e.target.classList.contains("card")) {
      e.target.querySelector("span").classList.toggle("opacity-0");
      e.target.querySelector("span").classList.add("transition-opacity");

      if (currentPairCheck.length !== 2) {
        currentPairCheck.push(e.target);
        console.log(currentPairCheck);
      } else {
      }
    }
  }
});
