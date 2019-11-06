const countScore = (gameBoard) => {
  let score = 0;
  for (let i = 2; i < gameBoard.length - 3; i++) {
    for (let j = 2; j < gameBoard[i].length - 3; j++) {
      if (gameBoard[i][j] === 0) {
        score += 5;
      }
    }
  }
  return score;
};

module.exports = {
  countScore: countScore
}
;

