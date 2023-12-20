const timeWeight = 2;
const wrongGuessWeight = 2;

const calculateScore = (timeElapsedInSeconds, wrongGuesses) => {
  return timeElapsedInSeconds * timeWeight + wrongGuesses * wrongGuessWeight;
};

export default calculateScore;
