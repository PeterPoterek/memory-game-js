import "animate.css";

const container = document.querySelector("#container");

const fruits = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const fruitPairs = fruits.flatMap((fruit) => {
  return [fruit, fruit];
});

const shuffledfruits = fruitPairs.sort(() => Math.random() - 0.5);

const cards = document.querySelectorAll(".card");

let currentPairCheck = [];

cards.forEach((card, i) => {
  card.innerHTML = shuffledfruits[i];
});
// container.addEventListener("click", (e) => {
//   if (currentPairCheck.length === 2) {
//     if (currentPairCheck[0].textContent === currentPairCheck[1].textContent) {
//       currentPairCheck = [];
//     } else {
//       currentPairCheck = [];
//     }
//   } else {
//     if (e.target.classList.contains("card")) {
//       e.target.querySelector("span").classList.toggle("opacity-0");
//       e.target.querySelector("span").classList.add("transition-opacity");

//       if (currentPairCheck.length !== 2) {
//         currentPairCheck.push(e.target);

//         currentPairCheck[0].classList.add("pointer-events-none");

//         if (currentPairCheck.length === 2 && currentPairCheck[0].textContent === currentPairCheck[1].textContent) {
//           setTimeout(() => {
//             console.log(`Match ${currentPairCheck[0].textContent} ${currentPairCheck[1].textContent}`);

//             currentPairCheck[0].classList.replace("bg-gray-700", "bg-emerald-400");
//             currentPairCheck[0].classList.add("pointer-events-none");

//             currentPairCheck[1].classList.replace("bg-gray-700", "bg-emerald-400");
//             currentPairCheck[1].classList.add("pointer-events-none");

//             currentPairCheck = [];
//           }, 200);
//         } else {
//           setTimeout(() => {
//             if (currentPairCheck.length === 2 && currentPairCheck[0].textContent !== currentPairCheck[1].textContent) {
//               console.log(`Diffrent ${currentPairCheck[0].textContent} ${currentPairCheck[1].textContent}`);

//               currentPairCheck[0].classList.add("animate__animated", "animate__shakeX", "animate__faster");
//               currentPairCheck[0].querySelector("span").classList.toggle("opacity-0");
//               currentPairCheck[0].querySelector("span").classList.add("transition-opacity");
//               currentPairCheck[0].classList.remove("pointer-events-none");

//               currentPairCheck[1].classList.add("animate__animated", "animate__shakeX", "animate__faster");
//               currentPairCheck[1].querySelector("span").classList.toggle("opacity-0");
//               currentPairCheck[1].querySelector("span").classList.add("transition-opacity");
//               currentPairCheck[1].classList.remove("pointer-events-none");

//               currentPairCheck = [];
//             }
//           }, 500);
//         }
//       }
//     }
//   }
// });

// setInterval(() => {
//   if (currentPairCheck[0]) {
//     console.log(`Selected : ${currentPairCheck[0].textContent}`);
//   }
//   if (currentPairCheck[1]) {
//     console.log(`Selected : ${currentPairCheck[1].textContent}`);
//   }
// }, 1000);
