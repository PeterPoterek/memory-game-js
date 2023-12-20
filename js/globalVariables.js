let isProcessing;

const setIsProcessing = (value) => {
  isProcessing = value;
};
const getIsProcessing = () => {
  return isProcessing;
};

let wrongGuesses;

const setWrongGuesses = (value) => {
  wrongGuesses = value;
};
const getWrongGuesses = () => {
  return wrongGuesses;
};

let pairGuessed;

const setPairGuessed = (value) => {
  pairGuessed = value;
};
const getPairGuessed = () => {
  return pairGuessed;
};

export { setIsProcessing, getIsProcessing, setWrongGuesses, getWrongGuesses, setPairGuessed, getPairGuessed };
