const timeWeight = 1;
const wrongGuessWeight = 2;

const calculateScore = (timeElapsedInSeconds, wrongGuesses) => {
  return timeElapsedInSeconds * timeWeight + wrongGuesses * wrongGuessWeight;
};

export default calculateScore;
