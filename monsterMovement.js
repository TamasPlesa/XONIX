const monsterMovement = (arrayOfMonsters, matrix) => {
  for (let i = 0; i < arrayOfMonsters.length; i++) {
    const monster = arrayOfMonsters[i];
    const temp = {
      x: monster.x,
      y: monster.y
    };
    monster.x += Number(monster.xd);
    monster.y += Number(monster.yd);
    matrix[monster.x][monster.y] = '3';
    matrix[temp.x][temp.y] = 1;
    if (matrix[monster.x - 1][monster.y] === 0 || matrix[monster.x + 1][monster.y] === 0) {
      monster.xd *= -1;
    }
    if (matrix[monster.x][monster.y - 1] === 0 || matrix[monster.x][monster.y + 1] === 0) {
      monster.yd *= -1;
    }
  }
};

module.exports = {
  monsterMovement: monsterMovement
}
;
