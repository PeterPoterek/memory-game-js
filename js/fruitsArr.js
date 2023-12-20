const fruitsArr = ["🍎", "🍐", "🍋", "🍌", "🍇", "🍊"];

const fruitPairs = fruitsArr.flatMap((fruit) => [fruit, fruit]);

const getFruitPairs = () => {
  return fruitPairs;
};

const getFruitsArr = () => {
  return fruitsArr;
};

export { getFruitsArr, getFruitPairs };
