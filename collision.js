
let life = 3;

const collision = (arrayOfMonsters, outerMonster, gameBoard) => {
/*   const nextPosOfOuterMonster = gameBoard[outerMonster.xPosition + outerMonster.xDirection][outerMonster.yPosition + outerMonster.yDirection];
  if (nextPosOfOuterMonster === 2 || nextPosOfOuterMonster === 5) {
    life--;
  } */
  for (let i = 0; i < arrayOfMonsters.length; i++) {
    const monster = arrayOfMonsters[i];
    const nextPosition = gameBoard[monster.xPosition + monster.xDirection][monster.yPosition + monster.yDirection];
    if (nextPosition === 2 || nextPosition === 5) {
      life--;
    }
    if (life === 0) {
      process.exit();
    }
  }

  return life;
};

const lifeExport = () => {
  return life;
};

module.exports = {
  collision: collision,
  lifeExport: lifeExport
}
;
