export const alphabet = 'abcdefghijklmnoprstuwxyz'.split('');

export const getRandomNumberWithRange = (min, max) => {
  const maxValue = max + 1;
  const randomNumber = Math.floor(Math.random() * (maxValue - min) + min);
  return randomNumber;
};

export const addFn = (prevValue, currValue) => {
  return prevValue + currValue;
};

export const getRandomLengths = (array, min, max) => {
  const randomLenghts = [];
  while (randomLenghts.reduce(addFn, 0) !== array.length) {
    randomLenghts.push(getRandomNumberWithRange(min, max));
    if (randomLenghts.reduce(addFn, 0) > 24) {
      randomLenghts.length = 0;
    }
  }
  return randomLenghts;
};
