const index = () => {
  const initGameBoard = require('./initGameBoard');
  const initPositionsOfCharacters = require('./initPositionsOfCharacters');
  const monsterMovement = require('./monsterMovement');
  const outerMonsterMovement = require('./outerMonsterMovement');
  const heroMovement = require('./heroMovement');

  const stagelevel = 1;
  let gameBoard = initGameBoard.gameBoardGenerator(26, 63, 2);
  const arrayOfMonsters = initPositionsOfCharacters.spawnInnerBalls(gameBoard, stagelevel);
  const outerMonster = initPositionsOfCharacters.spawnOuterBall(gameBoard);
  let player = initPositionsOfCharacters.spawnPlayer(gameBoard);
  let lastPressedKey = '';

  const index = () => {
    gameBoard = monsterMovement.monsterMovement(arrayOfMonsters, gameBoard);
    gameBoard = outerMonsterMovement.outerMonsterMovement(outerMonster, gameBoard);
    console.clear();
    console.log(gameBoard.join('\n'));
    console.log(heroMovement.temporaryField);
  }
;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  process.stdin.on('data', (key) => {
    if (key === 's') {
      if (player.xPosition !== 25) player = heroMovement.moveDown(player, gameBoard);
      lastPressedKey = 's';
      const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
      if (heroMovement.temporaryField === 0 && firstSpaceToCut != null) {
        const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, firstSpaceToCut);
        heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
        if (firstOneToCut != null) heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut);
        console.clear();
        console.log(gameBoard.join('\n'));
      }
    }
    if (key === 'w') {
      if (player.xPosition !== 0) player = heroMovement.moveUp(player, gameBoard);
      lastPressedKey = 'w';
      const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
      if (heroMovement.temporaryField === 0 && firstSpaceToCut != null) {
        const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, firstSpaceToCut);
        heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
        if (firstOneToCut != null) heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut);
        console.clear();
        console.log(gameBoard.join('\n'));
      }
    }
    if (key === 'd') {
      if (player.yPosition !== 62) player = heroMovement.moveRight(player, gameBoard);
      lastPressedKey = 'd';
      const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
      if (heroMovement.temporaryField === 0 && firstSpaceToCut != null) {
        const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, firstSpaceToCut);
        heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
        if (firstOneToCut != null) { heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut); }
        console.clear();
        console.log(gameBoard.join('\n'));
      }
    }
    if (key === 'a') {
      if (player.yPosition !== 0) player = heroMovement.moveLeft(player, gameBoard);
      lastPressedKey = 'a';
      const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
      if (heroMovement.temporaryField === 0 && firstSpaceToCut != null) {
        const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, firstSpaceToCut);
        heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
        console.log(firstOneToCut);
        if (firstOneToCut != null) { heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut); }
        console.clear();
        console.log(gameBoard.join('\n'));
      }
    }
    if (key === 'q') {
      process.exit();
    }
  });

  setInterval(index, 500);
};

module.exports = {
  index: index
}
;
