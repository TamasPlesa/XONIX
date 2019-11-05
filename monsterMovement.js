const monsterMovement = (arrayOfMonsters, matrix) => {
  for (let i = 0; i < arrayOfMonsters.length; i++) {
    const monster = arrayOfMonsters[i];
    const temp = {
      x: monster.xPosition,
      y: monster.yPosition
    };
    monster.xPosition += Number(monster.xDirection);
    monster.yPosition += Number(monster.yDirection);
    matrix[monster.xPosition][monster.yPosition] = 3;
    matrix[temp.x][temp.y] = 1;
    if (matrix[monster.xPosition - 1][monster.yPosition] === 0 || matrix[monster.xPosition + 1][monster.yPosition] === 0) {
      monster.xDirection *= -1;
    }
    if (matrix[monster.xPosition][monster.yPosition - 1] === 0 || matrix[monster.xPosition][monster.yPosition + 1] === 0) {
      monster.yDirection *= -1;
    }
  }
  return matrix;
};

module.exports = {
  monsterMovement: monsterMovement
}
;
