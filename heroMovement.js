const lastPressedKey = '';

let sum = 0;

let temporaryField = 0;
const moveDown = (playerObject, gameBoard) => {
  const nextXPosition = playerObject.xPosition + 1;
  if (gameBoard[nextXPosition][playerObject.yPosition] === 5) process.exit();
  if (playerObject.xPosition === 0) {
    gameBoard[nextXPosition][playerObject.yPosition] = 2;
    gameBoard[playerObject.xPosition][playerObject.yPosition] = 0;
  } else {
    gameBoard[playerObject.xPosition][playerObject.yPosition] = temporaryField;
    temporaryField = gameBoard[nextXPosition][playerObject.yPosition];
    if (temporaryField === 1) temporaryField = 5;
    gameBoard[nextXPosition][playerObject.yPosition] = 2;
  }
  const playersActualPosition = {
    xPosition: nextXPosition,
    yPosition: playerObject.yPosition
  };
  console.clear();
  console.log(gameBoard.join('\n'));
  return playersActualPosition;
};

const moveUp = (playerObject, gameBoard) => {
  const nextXPosition = playerObject.xPosition - 1;
  if (gameBoard[nextXPosition][playerObject.yPosition] === 5) process.exit();
  if (playerObject.xPosition === 26) {
    gameBoard[nextXPosition][playerObject.yPosition] = 2;
    gameBoard[playerObject.xPosition][playerObject.yPosition] = 0;
  } else {
    gameBoard[playerObject.xPosition][playerObject.yPosition] = temporaryField;
    temporaryField = gameBoard[nextXPosition][playerObject.yPosition];
    if (temporaryField === 1) temporaryField = 5;
    gameBoard[nextXPosition][playerObject.yPosition] = 2;
  }
  const playersActualPosition = {
    xPosition: nextXPosition,
    yPosition: playerObject.yPosition
  };
  console.clear();
  console.log(gameBoard.join('\n'));
  return playersActualPosition;
};

const moveRight = (playerObject, gameBoard) => {
  const nextYPosition = playerObject.yPosition + 1;
  if (gameBoard[playerObject.xPosition][nextYPosition] === 5) process.exit();
  if (playerObject.yPosition === 63) {
    gameBoard[playerObject.xPosition][nextYPosition] = 2;
    gameBoard[playerObject.xPosition][playerObject.yPosition] = 0;
  } else {
    gameBoard[playerObject.xPosition][playerObject.yPosition] = temporaryField;
    temporaryField = gameBoard[playerObject.xPosition][nextYPosition];
    if (temporaryField === 1) temporaryField = 5;
    gameBoard[playerObject.xPosition][nextYPosition] = 2;
  }
  const playersActualPosition = {
    xPosition: playerObject.xPosition,
    yPosition: nextYPosition

  };
  console.clear();
  console.log(gameBoard.join('\n'));
  return playersActualPosition;
};

const moveLeft = (playerObject, gameBoard) => {
  const nextYPosition = playerObject.yPosition - 1;
  if (gameBoard[playerObject.xPosition][nextYPosition] === 5) process.exit();
  if (playerObject.yPosition === 0) {
    gameBoard[playerObject.xPosition][nextYPosition] = 2;
    gameBoard[playerObject.xPosition][playerObject.yPosition] = 0;
  } else {
    gameBoard[playerObject.xPosition][playerObject.yPosition] = temporaryField;
    temporaryField = gameBoard[playerObject.xPosition][nextYPosition];
    if (temporaryField === 1) temporaryField = 5;
    gameBoard[playerObject.xPosition][nextYPosition] = 2;
  }
  const playersActualPosition = {
    xPosition: playerObject.xPosition,
    yPosition: nextYPosition

  };
  console.clear();
  console.log(gameBoard.join('\n'));
  return playersActualPosition;
};

const findTheFirstSpace = (gameBoard) => {
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === 5) return [i, j];
    }
  }
};

const checkingSidesDown = (gameBoard, firstSpaceToCut) => {
  const helperArray = [];
  for (let i = 0; i < gameBoard.length; i++) {
    helperArray[i] = [...gameBoard[i]];
  }
  const i = firstSpaceToCut[0];
  const j = firstSpaceToCut[1];
  const firstOneToCut = [];
  let firstSide;
  let secondSide;
  if (gameBoard[i - 1][j - 1] === 1 && gameBoard[i + 1][j + 1] === 1) {
    firstSide = counterOfOnes(helperArray, lastPressedKey, [i - 1, j - 1]);
    sum = 0;
    secondSide = counterOfOnes(helperArray, lastPressedKey, [i + 1, j + 1]);
    if (firstSide <= secondSide) {
      firstOneToCut[0] = i - 1;
      firstOneToCut[1] = j - 1;
      return firstOneToCut;
    } else {
      firstOneToCut[0] = i + 1;
      firstOneToCut[1] = j + 1;
      return firstOneToCut;
    }
  } else if (gameBoard[i][j - 1] === 1 && gameBoard[i][j + 1] === 1) {
    firstSide = counterOfOnes(helperArray, lastPressedKey, [i, j - 1]);
    sum = 0;
    secondSide = counterOfOnes(helperArray, lastPressedKey, [i, j + 1]);
    if (firstSide <= secondSide) {
      firstOneToCut[0] = i;
      firstOneToCut[1] = j - 1;
      return firstOneToCut;
    } else {
      firstOneToCut[0] = i;
      firstOneToCut[1] = j + 1;
      return firstOneToCut;
    }
  } else if (gameBoard[i - 1][j] === 1 && gameBoard[i + 1][j] === 1) {
    firstSide = counterOfOnes(helperArray, lastPressedKey, [i - 1, j]);
    sum = 0;
    secondSide = counterOfOnes(helperArray, lastPressedKey, [i + 1, j]);
    if (firstSide <= secondSide) {
      firstOneToCut[0] = i - 1;
      firstOneToCut[1] = j;
      return firstOneToCut;
    } else {
      firstOneToCut[0] = i + 1;
      firstOneToCut[1] = j;
      return firstOneToCut;
    }
  } else if (gameBoard[i - 1][j + 1] === 1 && gameBoard[i + 1][j - 1] === 1) {
    firstSide = counterOfOnes(helperArray, lastPressedKey, [i - 1, j - 1]);
    sum = 0;
    secondSide = counterOfOnes(helperArray, lastPressedKey, [i + 1, j + 1]);
    if (firstSide <= secondSide) {
      firstOneToCut[0] = i - 1;
      firstOneToCut[1] = j - 1;
      return firstOneToCut;
    } else {
      firstOneToCut[0] = i + 1;
      firstOneToCut[1] = j - 1;
      return firstOneToCut;
    }
  }
};

const counterOfOnes = (helperArray, lastPressedKey, firstElementToCutOut) => {
  const i = firstElementToCutOut[0];
  const j = firstElementToCutOut[1];
  if (lastPressedKey === 's' || lastPressedKey === 'd' || lastPressedKey === 'a' || lastPressedKey === 'w') {
    if (helperArray[i][j] === 1) {
      helperArray[i][j] = 0;
      sum++;
      firstElementToCutOut[0] = i;
      firstElementToCutOut[1] = j + 1;
      counterOfOnes(helperArray, lastPressedKey, firstElementToCutOut);
      firstElementToCutOut[0] = i;
      firstElementToCutOut[1] = j - 1;
      counterOfOnes(helperArray, lastPressedKey, firstElementToCutOut);
      if (helperArray[i - 1][j] === 1) {
        firstElementToCutOut[0] = i - 1;
        firstElementToCutOut[1] = j;
        counterOfOnes(helperArray, lastPressedKey, firstElementToCutOut);
      }
      if (helperArray[i + 1][j] === 1) {
        firstElementToCutOut[0] = i + 1;
        firstElementToCutOut[1] = j;
        counterOfOnes(helperArray, lastPressedKey, firstElementToCutOut);
      }
    }
  }
  return sum;
};

const cuttingOutSpaces = (gameBoard, lastPressedKey, firstElementToCutOut) => {
  const i = firstElementToCutOut[0];
  const j = firstElementToCutOut[1];
  if (lastPressedKey === 's' || lastPressedKey === 'd' || lastPressedKey === 'a' || lastPressedKey === 'w') {
    if (gameBoard[i][j] === 5) {
      gameBoard[i][j] = 0;
      firstElementToCutOut[0] = i;
      firstElementToCutOut[1] = j - 1;
      cuttingOutSpaces(gameBoard, lastPressedKey, firstElementToCutOut);
      firstElementToCutOut[0] = i;
      firstElementToCutOut[1] = j + 1;
      cuttingOutSpaces(gameBoard, lastPressedKey, firstElementToCutOut);
      if (gameBoard[i - 1][j] === 5) {
        firstElementToCutOut[0] = i - 1;
        firstElementToCutOut[1] = j;
        cuttingOutSpaces(gameBoard, lastPressedKey, firstElementToCutOut);
      }
      if (gameBoard[i + 1][j] === 5) {
        firstElementToCutOut[0] = i + 1;
        firstElementToCutOut[1] = j;
        cuttingOutSpaces(gameBoard, lastPressedKey, firstElementToCutOut);
      }
    }
  }
};

const cuttingOutOnes = (gameBoard, lastPressedKey, firstElementToCutOut) => {
  const i = firstElementToCutOut[0];
  const j = firstElementToCutOut[1];
  if (lastPressedKey === 's' || lastPressedKey === 'd' || lastPressedKey === 'a' || lastPressedKey === 'w') {
    if (gameBoard[i][j] === 1) {
      gameBoard[i][j] = 0;
      firstElementToCutOut[0] = i;
      firstElementToCutOut[1] = j - 1;
      cuttingOutOnes(gameBoard, lastPressedKey, firstElementToCutOut);
      firstElementToCutOut[0] = i;
      firstElementToCutOut[1] = j + 1;
      cuttingOutOnes(gameBoard, lastPressedKey, firstElementToCutOut);
      if (gameBoard[i - 1][j] === 1) {
        firstElementToCutOut[0] = i - 1;
        firstElementToCutOut[1] = j;
        cuttingOutOnes(gameBoard, lastPressedKey, firstElementToCutOut);
      }
      if (gameBoard[i + 1][j] === 1) {
        firstElementToCutOut[0] = i + 1;
        firstElementToCutOut[1] = j;
        cuttingOutOnes(gameBoard, lastPressedKey, firstElementToCutOut);
      }
    }
  }
};

const temporaryFieldAdder = () => {
  return temporaryField;
};

module.exports = {
  moveUp: moveUp,
  moveDown: moveDown,
  moveLeft: moveLeft,
  moveRight: moveRight,
  findTheFirstSpace: findTheFirstSpace,
  checkingSidesDown: checkingSidesDown,
  counterOfOnes: counterOfOnes,
  cuttingOutSpaces: cuttingOutSpaces,
  cuttingOutOnes: cuttingOutOnes,
  temporaryFieldAdder: temporaryFieldAdder
}
;
