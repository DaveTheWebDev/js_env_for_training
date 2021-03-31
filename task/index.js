export const forEachFn = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callback(element);
  }
  return array;
};

export const mapFn = (array, callback) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const newElement = callback(element);
    newArray.push(newElement);
  }
  return newArray;
};

export const entriesFn = (array) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    return [index, element];
  }
};

export const filterFn = (array, callback) => {
  const filteredArray = [];
  for (const element of array) {
    const filteredElement = callback(element);
    if (filteredElement) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

export const reduceFn = (array, callback, inital) => {
  let sum;
  inital ? (sum = inital) : (sum = 0);
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let nextElement = array[++index];
    if (!nextElement) nextElement = 0;
    sum += callback(element, nextElement);
  }
  return sum;
};

export const everyFn = (array, callback) => {
  const trueArray = [];
  for (const element of array) {
    const isTrue = callback(element);
    if (isTrue) {
      trueArray.push(element);
    }
  }
  if (array.length === trueArray.length) {
    return true;
  } else {
    return false;
  }
};

export const someFn = (array, callback) => {
  for (const element of array) {
    const isTrue = callback(element);
    if (isTrue) return true;
  }
  return false;
};
