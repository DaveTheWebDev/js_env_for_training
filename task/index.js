export const findPharseInArray = (array, pharse) => {
  const results = []
  array.filter((word, id) => {
    const wordToPush = word.toLowerCase().includes(pharse)
    if (wordToPush) {
        results.push([id,  word])
      }
    })
  return results
};
