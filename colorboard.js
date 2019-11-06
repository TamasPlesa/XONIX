const colors = require('colors');

const draw = (gameBoard) => {
  for (let i = 0; i < gameBoard.length; i++) {
    let line = '';
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === 0) {
        line = line + '  '.bgYellow;
      }
      if (gameBoard[i][j] === 1) {
        line = line + '  '.bgRed;
      }
      if (gameBoard[i][j] === 2) {
        line = line + '  '.bgWhite;
      }
      if (gameBoard[i][j] === 3) {
        line = line + '  '.bgBlack;
      }
      if (gameBoard[i][j] === 4) {
        line = line + '  '.bgBlack;
      }
      if (gameBoard[i][j] === 5) {
        line = line + '  '.bgWhite;
      }
    }
    process.stdout.write(line);
    console.log();
  }
};
module.exports = {
  draw: draw
}
;
