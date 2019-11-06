
let life = 3;
const collision = (arrayOfMonsters, outerMonster, gameBoard) => {
  const nextPosOfOuterMonster = gameBoard[outerMonster.x + outerMonster.xd][outerMonster.y + outerMonster.yd];
  if (nextPosOfOuterMonster === '2' || nextPosOfOuterMonster === '5') {
    life--;
  }
  for (let i = 0; i < arrayOfMonsters.length; i++) {
    const monster = arrayOfMonsters[i];
    const nextPosition = gameBoard[monster.x + monster.xd][monster.y + monster.yd];
    if (nextPosition === '2' || nextPosition === '5') {
      life--;
    }
    if (life === 0) {
      process.exit();
    }
  }

  return life;
};

module.exports = {
  collision: collision
}
;
