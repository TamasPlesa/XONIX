const mpg = require('mpg123');
const player = new mpg.MpgPlayer();

let life = 3;

const collision = (arrayOfMonsters, temporaryDirection, outerMonster, gameBoard) => {
  const tempXDirection = temporaryDirection[0];
  const tempYDirection = temporaryDirection[1];
  const nextPosOfOuterMonster = gameBoard[outerMonster.xPosition + tempXDirection][outerMonster.yPosition + tempYDirection];
  if (nextPosOfOuterMonster === 2 || nextPosOfOuterMonster === 5) {
    life--;
    player.play('sfx_lowhealth_alarmloop7 (online-audio-converter.com).mp3');
  }
  for (let i = 0; i < arrayOfMonsters.length; i++) {
    const monster = arrayOfMonsters[i];
    const nextPosition = gameBoard[monster.xPosition + monster.xDirection][monster.yPosition + monster.yDirection];
    if (nextPosition === 2 || nextPosition === 5) {
      life--;
      player.play('sfx_lowhealth_alarmloop7 (online-audio-converter.com).mp3');
    }
    if (life === 0) {

    }
  }

  return life;
};

const lifeExport = () => {
  return life;
};

const lifeminuser = (a) => {
  life = life - a;
};

module.exports = {
  collision: collision,
  lifeExport: lifeExport,
  lifeminuser: lifeminuser
}
;
