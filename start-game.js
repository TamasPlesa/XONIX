const initGameBoard = require('./initGameBoard');
const initPositionsOfCharacters = require('./initPositionsOfCharacters');
const monsterMovement = require('./monsterMovement');
const outerMonsterMovement = require('./outerMonsterMovement');
const heroMovement = require('./heroMovement');
const draw = require('./colorboard');
const collision = require('./collision');

let actualLife = collision.lifeExport();

const stagelevel = 10;
let gameBoard = initGameBoard.gameBoardGenerator(26, 63, 2);
const arrayOfMonsters = initPositionsOfCharacters.spawnInnerBalls(gameBoard, stagelevel);
const outerMonster = initPositionsOfCharacters.spawnOuterBall(gameBoard);
let player = initPositionsOfCharacters.spawnPlayer(gameBoard);
let lastPressedKey = '';

const moveDownInterval = () => {
  clearInterval(moveRightInterval);
  clearInterval(moveUpInterval);
  clearInterval(moveLeftInterval);
  if (player.xPosition !== 25) player = heroMovement.moveDown(player, gameBoard);
  lastPressedKey = 's';
  const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
  const temporaryField = heroMovement.temporaryFieldAdder();
  if (temporaryField === 0 && firstSpaceToCut != null) {
    const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, lastPressedKey, firstSpaceToCut);
    heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
    if (firstOneToCut != null) heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut);
  }
};
const moveUpInterval = () => {
  clearInterval(moveDownInterval);
  clearInterval(moveRightInterval);
  clearInterval(moveLeftInterval);
  if (player.xPosition !== 0) player = heroMovement.moveUp(player, gameBoard);
  lastPressedKey = 'w';
  const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
  const temporaryField = heroMovement.temporaryFieldAdder();
  if (temporaryField === 0 && firstSpaceToCut != null) {
    const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, lastPressedKey, firstSpaceToCut);
    heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
    if (firstOneToCut != null) heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut);
  }
};

const moveRightInterval = () => {
  clearInterval(moveDownInterval);
  clearInterval(moveUpInterval);
  clearInterval(moveLeftInterval);
  if (player.yPosition !== 62) player = heroMovement.moveRight(player, gameBoard);
  lastPressedKey = 'd';
  const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
  const temporaryField = heroMovement.temporaryFieldAdder();
  if (temporaryField === 0 && firstSpaceToCut != null) {
    const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, lastPressedKey, firstSpaceToCut);
    heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
    if (firstOneToCut != null) { heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut); }
  }
};

const moveLeftInterval = () => {
  clearInterval(moveDownInterval);
  clearInterval(moveUpInterval);
  clearInterval(moveRightInterval);
  if (player.yPosition !== 0) player = heroMovement.moveLeft(player, gameBoard);
  lastPressedKey = 'a';
  const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
  const temporaryField = heroMovement.temporaryFieldAdder();
  if (temporaryField === 0 && firstSpaceToCut != null) {
    const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, lastPressedKey, firstSpaceToCut);
    heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
    if (firstOneToCut != null) { heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut); }
  }
};

const putHeroBack = () => {
  player = {
    mark: 2,
    xPosition: 0,
    yPosition: Math.floor(gameBoard[0].length / 2)
  };
  for (let i = 1; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === 5 || gameBoard[i][j] === 2) {
        gameBoard[i][j] = 1;
      }
    }
  }
  heroMovement.setTemporaryField();
};

const index = () => {
  gameBoard = monsterMovement.monsterMovement(arrayOfMonsters, gameBoard);
  gameBoard = outerMonsterMovement.outerMonsterMovement(outerMonster, gameBoard);
  if (lastPressedKey === '') gameBoard[1][31] = 2;
  console.clear();
  draw.draw(gameBoard);
  console.log(actualLife);
  collision.collision(arrayOfMonsters, outerMonster, gameBoard);
  const life = collision.lifeExport();
  if (actualLife > life) {
    putHeroBack();
    actualLife--;
    lastPressedKey = '';
  }

  if (lastPressedKey === 's') { moveDownInterval(); }
  if (lastPressedKey === 'w') { moveUpInterval(); }
  if (lastPressedKey === 'a') { moveLeftInterval(); }
  if (lastPressedKey === 'd') { moveRightInterval(); }
}
;

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
process.stdin.on('data', (key) => {
  if (key === 's') {
    lastPressedKey = 's';
  }
  if (key === 'w') {
    lastPressedKey = 'w';
  }
  if (key === 'd') {
    lastPressedKey = 'd';
  }
  if (key === 'a') {
    lastPressedKey = 'a';
  }
  if (key === 'q') {
    process.exit();
  }
});

/* let moveDownInterval = 0;
let moveUpInterval = 0;
let moveRightInterval = 0;
let moveLeftInterval = 0; */
setInterval(index, 200);

/* module.exports = {
  startGame: startGame
}; */
