const timeWeight = 0.5;
const wrongGuessWeight = 3.5;

const calculateScore = (timeElapsedInSeconds, wrongGuesses) => {
  return 100 - (timeElapsedInSeconds * timeWeight + wrongGuesses * wrongGuessWeight);
};

export default calculateScore;
