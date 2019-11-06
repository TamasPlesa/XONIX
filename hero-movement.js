// Misimatrix
const initGameBoard = require('./initGameBoard');
const gameBoard = initGameBoard.gameBoardGenerator(26, 63, 2);
const spawnPlayer = require('./initPositionsOfCharacters');
// HeroMovement
const keyPress = require('keypress');
keyPress(process.stdin);
process.stdin.on('keypress', (key) => {
  if (key === 's') {
    const playerObject = spawnPlayer.spawnPlayer();
    moveDown(playerObject, gameBoard);
  }
  if (key === 'w') {
    const playerObject = spawnPlayer.spawnPlayer();
    moveUp(playerObject);
  }
  if (key === 'a') {
    const playerObject = spawnPlayer.spawnPlayer();
    moveLeft(playerObject);
  }
  if (key === 'd') {
    const playerObject = spawnPlayer.spawnPlayer();
    moveRight(playerObject);
  }
});

const moveDown = (playerObject, gameBoard) => {
  const playerActualPosition = Object.keys(playerObject);
  let xActualPosition = playerActualPosition[1];
  const xNextPosition = xActualPosition++;
  const yActualPosition = playerActualPosition[2];
  const yNextPosition = yActualPosition;
  const objectMove = {
    xActualPosition: xNextPosition,
    yActualposition: yNextPosition

  };
  gameBoard[xNextPosition][yNextPosition] = 'M';
  console.clear();
  console.log(gameBoard.join('\n'));
  return objectMove;
};

const moveUp = (playerObject) => {
  const playerActualPosition = Object.keys(playerObject);
  let xActualPosition = playerActualPosition[1];
  const xNextPosition = xActualPosition--;
  const yActualPosition = playerActualPosition[2];
  const yNextPosition = yActualPosition;
  const objectMove = {
    xActualPosition: xNextPosition,
    yActualposition: yNextPosition

  };
  return objectMove;
};

const moveLeft = (playerObject) => {
  const playerActualPosition = Object.keys(playerObject);
  const xActualPosition = playerActualPosition[1];
  const xNextPosition = xActualPosition;
  let yActualPosition = playerActualPosition[2];
  const yNextPosition = yActualPosition--;
  const objectMove = {
    xActualPosition: xNextPosition,
    yActualposition: yNextPosition

  };
  return objectMove;
};

const moveRight = (playerObject) => {
  const playerActualPosition = Object.keys(playerObject);
  const xActualPosition = playerActualPosition[1];
  const xNextPosition = xActualPosition;
  let yActualPosition = playerActualPosition[2];
  const yNextPosition = yActualPosition++;
  const objectMove = {
    xActualPosition: xNextPosition,
    yActualposition: yNextPosition

  };
  return objectMove;
};

console.log(gameBoard.join('\n'))
;
