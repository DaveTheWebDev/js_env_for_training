const data = ['a', 'b', 'c', 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const settings1 = {
  actualPageIndex: 5,
  entriesOnPage: 3,
};
const paginateArray = (array, settings) => {
  const maxEntries = settings.entriesOnPage;
  const entriesOnSelectedPage = [];
  const arrayCopy = [...array];
  for (let index = 0; index < arrayCopy.length; index + maxEntries) {
    let page = null;
    if (index - maxEntries < 0) {
      page = arrayCopy.splice(index, maxEntries - index);
    } else {
      page = arrayCopy.splice(index, maxEntries);
    }
    entriesOnSelectedPage.push(page);
  }
  if (entriesOnSelectedPage[settings.actualPageIndex]) {
    return entriesOnSelectedPage[settings.actualPageIndex].length;
  } else {
    throw new Error('There is no such page');
  }
};

console.log(paginateArray(data, settings1));
