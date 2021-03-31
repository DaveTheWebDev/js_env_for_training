export const forEachCb = (element) => {
  return element * 2;
};
export const mapCb = (element) => {
  return element * 2;
};
export const filterCb = (element) => {
  if (element > 3) {
    return true;
  } else {
    return false;
  }
};
export const everyCb = (element) => {
  if (element >= 4) {
    return true;
  } else {
    return false;
  }
};
export const someCb = (element) => {
  if (element > 5) {
    return true;
  } else {
    return false;
  }
};
export const reduceCb = (number1, number2) => {
  return number1 + number2;
};

export const exampleArray = [3, 4, 5, 5, 4];
