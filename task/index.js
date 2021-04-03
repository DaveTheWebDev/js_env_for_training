const generateArrayWithRandomNumbers = (
  howManyNumbers = 10,
  min = 1,
  max = 10
) => {
  const randomNumbers = [];
  const minRange = min;
  const maxRange = max + 1;
  for (let index = 0; index < howManyNumbers; index++) {
    const randomNumber = Math.floor(
      Math.random() * (maxRange - minRange) + minRange
    );
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

const generateArraysOfArrays = (
  howManyArrays = 10,
  howManyNumbers,
  min,
  max
) => {
  const numbersArray = [];
  for (let index = 0; index < howManyArrays; index++) {
    const randomNumbers = generateArrayWithRandomNumbers(
      howManyNumbers,
      min,
      max
    );
    numbersArray.push(randomNumbers);
  }
  return numbersArray;
};
