
const outerMonsterMovement = (outerMonster, gameBoard) => {
  const temp = {
    x: outerMonster.x,
    y: outerMonster.y
  };

  outerMonster.xPosition += Number(outerMonster.xDirection);

  outerMonster.yPosition += Number(outerMonster.yDirection);
  gameBoard[outerMonster.xPosition][outerMonster.yPosition] = '2';
  gameBoard[temp.x][temp.y] = 0;
  if (outerMonster.xPosition === gameBoard.length - 1 || outerMonster.xPosition === 0 || gameBoard[outerMonster.xPosition - 1][outerMonster.yPosition] === 1 || gameBoard[outerMonster.xPosition + 1][outerMonster.yPosition] === 1) {
    outerMonster.xDirection *= -1;
  }
  if (outerMonster.yPosition === gameBoard[outerMonster.xPosition].length - 1 || outerMonster.yPosition === 0 || gameBoard[outerMonster.xPosition][outerMonster.yPosition - 1] === 1 || gameBoard[outerMonster.xPosition][outerMonster.yPosition + 1] === 1) {
    outerMonster.yDirection *= -1;
  }

  return gameBoard;
};
module.exports = {
  outerMonsterMovement: outerMonsterMovement
}
;
