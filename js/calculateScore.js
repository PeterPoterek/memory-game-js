const timeWeight = 0.5;
const wrongGuessWeight = 3.5;

const calculateScore = (timeElapsedInSeconds, wrongGuesses) => {
  let score = 100 - (timeElapsedInSeconds * timeWeight + wrongGuesses * wrongGuessWeight);

  score = Math.max(score, 0);

  return score;
};

export default calculateScore;
