const mapCb = (x) => x * 2;
const arr = [2, 3, 4, 5];
const mapFn = (array, cb) => {
  return array.reduce((acc, val) => {
    acc.push(cb(val));
    return acc;
  }, []);
};

// console.log(mapFn(arr, mapCb));

const filterCb = (x) => x > 3;
const filterFn = (array, cb) => {
  return array.reduce((acc, val) => {
    if (cb(val)) {
      acc.push(val);
    }
    return acc;
  }, []);
};

// console.log(filterFn(arr, filterCb));

const everyCb = (x) => x > 1;
const everyFn = (array, cb, id) => {
  return array.reduce((acc, val) => {
    if (!cb(val)) {
      acc = false;
    }
    return acc;
  }, true);
};

// console.log(everyFn(arr, everyCb));

const someCb = (x) => x > 10;
const someFn = (array, cb) => {
  return array.reduce((acc, val) => {
    if (cb(val)) {
      acc = true;
    }
    return acc;
  }, false);
};

console.log(someFn(arr, someCb));
