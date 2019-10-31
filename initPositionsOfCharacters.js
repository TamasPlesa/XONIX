const spawnPlayer = (gameBoard) => {
  const playerObject = {
    mark: 2,
    xPosition: 0,
    yPosition: Math.floor(gameBoard[0].length / 2)
  };
  return playerObject;
}
;

const spawnOuterBall = (gameBoard) => {
  const minusOrPlusX = Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  const minusOrPlusY = Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  const outerBallObject = {
    mark: 3,
    xPosition: gameBoard.length - 1,
    yPosition: Math.floor(gameBoard[0].length / 2),
    xDirection: 1 * minusOrPlusX,
    yDirection: 1 * minusOrPlusY
  };
  return outerBallObject;
};

const spawnInnerBalls = (gameBoard, stageLevel) => {
  const innerBalls = [];
  for (let i = 0; i < stageLevel + 2; i++) {
    const minusOrPlusX = Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    const minusOrPlusY = Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    const xPositioner = Math.floor(Math.random() * (gameBoard.length - 4) + 2);
    const yPositioner = Math.floor(Math.random() * (gameBoard[0].length - 4) + 2);
    const obj = {
      mark: 4,
      xPosition: xPositioner,
      yPosition: yPositioner,
      xDirection: (1 * minusOrPlusX),
      yDirection: (1 * minusOrPlusY)
    };
    innerBalls.push(obj);
  }
  return innerBalls;
};

module.exports = {
  spawnPlayer: spawnPlayer,
  spawnOuterBall: spawnOuterBall,
  spawnInnerBalls: spawnInnerBalls
}
;
