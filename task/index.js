import { getRandomLengths } from './utilis';

export const aggregateIntoChunks = (array) => {
  const arrayToChunks = [...array];
  const arrayOfChunks = [];
  const randomLenghts = getRandomLengths(arrayToChunks, 2, 10);
  randomLenghts.forEach((length) => {
    const chunk = arrayToChunks.splice(0, length);
    arrayOfChunks.push(chunk);
  });
  console.log(arrayOfChunks);
  return arrayOfChunks;
};
