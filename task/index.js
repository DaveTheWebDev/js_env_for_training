export const checkTypeAndMatch = (data, regExp) => {
  // cala funkcja przelatuje przez kazdy element i w zaleznosci od typu zwraca true / false, nastepnie taki array jest przekazywany wyżej i jeżeli jego dlugość jest wieksza niż 0 to przekazuje caly element do tablicy
  if (typeof data === 'string') {
    return data.match(regExp); // zwraca tabilce (true) lub null (false)
  } else if (typeof data === 'number') {
    return data.toString().match(regExp); // zwraca tabilce (true) lub null (false)
  } else if (Array.isArray(data)) {
    const result = data.filter((element) => checkTypeAndMatch(element, regExp));
    return result.length; // jezeli metoda filter znajdzie cos pasującego w tablicy to będzie miała długość większa niż 0 (true), jeśli nie znajdzie to będzie 0 (false)
  } else {
    const objectValues = Object.values(data);
    const result = objectValues.filter((element) =>
      checkTypeAndMatch(element, regExp)
    );
    return result.length;
  }
};
