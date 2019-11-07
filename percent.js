const maxOfFieldFunc = (gameBoard) => {
  let MaxOfField = 0;
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === 1) {
        MaxOfField += 1;
      }
    }
  }
  return MaxOfField;
};

const actualPercentFunc = (gameBoard) => {
  let actualPercent = 0;
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === 1) {
        actualPercent += 1;
      }
    }
  }
  return actualPercent;
};

const lessThanTwentyFive = (gameBoard, MaxOfField, actualPercent) => {
  if (MaxOfField * 0.25 <= actualPercent) {
    return true;
  }
};
