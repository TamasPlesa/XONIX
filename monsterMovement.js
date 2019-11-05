const monsterMovement = (arrayOfMonsters, matrix) => {
  for (let i = 0; i < arrayOfMonsters.length; i++) {
    const monster = arrayOfMonsters[i];
    const temp = {
<<<<<<< HEAD
<<<<<<< HEAD
      xPosition: monster.xPosition,
      yPosition: monster.yPosition
    };
    monster.xPosition += Number(monster.xDirection);
    monster.yPosition += Number(monster.yDirection);
    matrix[monster.xPosition][monster.yPosition] = '3';
    matrix[temp.xPosition][temp.yPosition] = 1;
=======
=======
>>>>>>> 41f30b61bc4b56170e14ba2b5396996129225dee
      x: monster.xPosition,
      y: monster.yPosition
    };
    monster.xPosition += Number(monster.xDirection);
    monster.yPosition += Number(monster.yDirection);
    matrix[monster.xPosition][monster.yPosition] = 3;
    matrix[temp.x][temp.y] = 1;
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> 41f30b61bc4b56170e14ba2b5396996129225dee
    if (matrix[monster.xPosition - 1][monster.yPosition] === 0 || matrix[monster.xPosition + 1][monster.yPosition] === 0) {
      monster.xDirection *= -1;
    }
    if (matrix[monster.x][monster.y - 1] === 0 || matrix[monster.x][monster.y + 1] === 0) {
      monster.yd *= -1;
    }
  }
  return matrix;
};

module.exports = {
  monsterMovement: monsterMovement
}
;
