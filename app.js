const isRectangularTriangle = (side1, side2, side3) => {
  const side1square = getNumberSquare(side1);
  const side2square = getNumberSquare(side2);
  const side3square = getNumberSquare(side3);
  console.log(
    side1square + side2square === side3square ||
      side1square + side3square === side2square ||
      side2square + side3square === side1square
  );
};

const getNumberSquare = (number) => {
  return Math.pow(number, 2);
};

isRectangularTriangle(3, 4, 5);
isRectangularTriangle(4, 3, 5);

isRectangularTriangle(4, 3, 2);
isRectangularTriangle(4, 4, 4);
