export const findPharseInArray = (array, pharse) => {
  const results = []
  array.filter((word, id) => {
    const wordToPush = word.toLowerCase().includes(pharse.toLowerCase())
    if (wordToPush) {
        results.push([id,  word])
      }
    })
    if (results.length === 0) {
      results.push({message: "No word includes given pharse"})
    }
    console.log(results)
  return results
};

// export const findPharseInArray = (array, pharse) => {
//   let results = array.reduce((accumulator, currentValue, currentIndex) => {
//     if (currentValue.toLowerCase().includes(pharse.toLowerCase())) {
//       accumulator.push({place: currentIndex, word: currentValue})
//     }
//     return accumulator
//   }, [])
//   if (results.length === 0) {
//     results.push({message: "No word includes given pharse"})
//   }
//   console.log(results)
//   return results
// };
