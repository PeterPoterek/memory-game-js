const cardContainer = document.querySelector(".cardContainer");
const cards = document.querySelectorAll(".card");
const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const playAgainButton = document.querySelector("#play-again-button");
const wrongGuessesDisplay = document.querySelector("#wrong-guesses");
const timerDisplay = document.querySelector("#timer");
const winScreen = document.querySelector("#win-screen");
const scoreTextDisplay = document.querySelector("#score-text-display");
const scoreNumberDisplay = document.querySelector("#score-number-display");
const highscoreTextDisplay = document.querySelector("#highscore-text-display");
const highscoreNumberDisplay = document.querySelector("#highscore-number-display");

export {
  cardContainer,
  cards,
  startButton,
  startScreen,
  playAgainButton,
  wrongGuessesDisplay,
  timerDisplay,
  winScreen,
  scoreTextDisplay,
  scoreNumberDisplay,
  highscoreTextDisplay,
  highscoreNumberDisplay,
};
