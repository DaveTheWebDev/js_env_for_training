import data from './task/utilis';
import { checkTypeAndMatch } from './task/index';

const filterWith = (arr, pharse) => {
  if (pharse.length <= 2) return [];
  if (!Array.isArray(arr) || !arr.length)
    throw new Error(`First argument should be array with content`);

  const finalResult = filterData(arr, pharse);
  if (finalResult.length === 0)
    throw new Error(`Can't find '${pharse}' pharse in given array`);
  else return finalResult;
};

const filterData = (data, pharse) => {
  const regExp = new RegExp(pharse, 'gi');
  const filteredData = data.filter((obj) => {
    return checkTypeAndMatch(obj, regExp);
  });
  return filteredData;
};

console.log(filterWith(data, 'bro'));
