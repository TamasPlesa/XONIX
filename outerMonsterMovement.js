
const outerMonsterMovement = (outerMonster, gameBoard) => {
  const temp = {
    x: outerMonster.x,
    y: outerMonster.y
  };

  outerMonster.x += Number(outerMonster.xd);
  outerMonster.y += Number(outerMonster.yd);
  gameBoard[outerMonster.x][outerMonster.y] = '2';
  gameBoard[temp.x][temp.y] = 0;
  if (outerMonster.x === gameBoard.length - 1 || outerMonster.x === 0 || gameBoard[outerMonster.x - 1][outerMonster.y] === 1 || gameBoard[outerMonster.x + 1][outerMonster.y] === 1) {
    outerMonster.xd *= -1;
  }
  if (outerMonster.y === gameBoard[outerMonster.x].length - 1 || outerMonster.y === 0 || gameBoard[outerMonster.x][outerMonster.y - 1] === 1 || gameBoard[outerMonster.x][outerMonster.y + 1] === 1) {
    outerMonster.yd *= -1;
  }

  return gameBoard;
};
module.exports = {
  outerMonsterMovement: outerMonsterMovement
}
;
