// HeroMovement
const keyPress = require('keypress');
keyPress(process.stdin);

// MOZGAS

process.stdin.on('keypress', (key) => {
  if (key === 's') {
    const playerObject = spawnPlayer();
    moveDown(playerObject);
  }
  if (key === 'w') {
    const playerObject = spawnPlayer();
    moveUp(playerObject);
  }
  if (key === 'a') {
    const playerObject = spawnPlayer();
    moveLeft(playerObject);
  }
  if (key === 'd') {
    const playerObject = spawnPlayer();
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
