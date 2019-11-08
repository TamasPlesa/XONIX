
const startGame = (stagelevel) => {
  const chalk = require('chalk');
  const center = require('align-text');
  const font = require('unifont');
  const initGameBoard = require('./initGameBoard');
  const initPositionsOfCharacters = require('./initPositionsOfCharacters');
  const monsterMovement = require('./monsterMovement');
  const outerMonsterMovement = require('./outerMonsterMovement');
  const heroMovement = require('./heroMovement');
  const draw = require('./colorboard');
  const collision = require('./collision');
  const score = require('./score');
  const percent = require('./percent');
  const gameOver = require('./game-over');
  const youWin = require('./you-win');
  const mpg = require('mpg123');
  const menuMain = require('./xonix-main-menu');
  const player = new mpg.MpgPlayer();

  let actualLife = collision.lifeExport();
  let actualScore = 0;
  let gameBoard = initGameBoard.gameBoardGenerator(26, 63, 2);
  const arrayOfMonsters = initPositionsOfCharacters.spawnInnerBalls(gameBoard, stagelevel);
  const outerMonster = initPositionsOfCharacters.spawnOuterBall(gameBoard);
  let playerke = initPositionsOfCharacters.spawnPlayer(gameBoard);
  let lastPressedKey = '';
  const maxOfField = percent.maxOfFieldFunc(gameBoard);

  const moveDownInterval = () => {
    clearInterval(moveRightInterval);
    clearInterval(moveUpInterval);
    clearInterval(moveLeftInterval);
    if (playerke.xPosition !== 25) playerke = heroMovement.moveDown(playerke, gameBoard);
    lastPressedKey = 's';
    const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
    const temporaryField = heroMovement.temporaryFieldAdder();
    if (temporaryField === 0 && firstSpaceToCut != null) {
      const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, lastPressedKey, firstSpaceToCut);
      heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
      player.play('sfx_sounds_fanfare3 (online-audio-converter.com).mp3');
      if (firstOneToCut != null && firstOneToCut !== -1) {
        heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut);
        player.play('sfx_sounds_fanfare3 (online-audio-converter.com).mp3');
      }
      actualScore += score.countScore(gameBoard);
    }
  };
  const moveUpInterval = () => {
    clearInterval(moveDownInterval);
    clearInterval(moveRightInterval);
    clearInterval(moveLeftInterval);
    if (playerke.xPosition !== 0) playerke = heroMovement.moveUp(playerke, gameBoard);
    lastPressedKey = 'w';
    const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
    const temporaryField = heroMovement.temporaryFieldAdder();
    if (temporaryField === 0 && firstSpaceToCut != null) {
      const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, lastPressedKey, firstSpaceToCut);
      heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
      player.play('sfx_sounds_fanfare3 (online-audio-converter.com).mp3');
      if (firstOneToCut != null && firstOneToCut !== -1) {
        heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut);
        player.play('sfx_sounds_fanfare3 (online-audio-converter.com).mp3');
      }
      actualScore += score.countScore(gameBoard);
    }
  };

  const moveRightInterval = () => {
    clearInterval(moveDownInterval);
    clearInterval(moveUpInterval);
    clearInterval(moveLeftInterval);
    if (playerke.yPosition !== 62) playerke = heroMovement.moveRight(playerke, gameBoard);
    lastPressedKey = 'd';
    const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
    const temporaryField = heroMovement.temporaryFieldAdder();
    if (temporaryField === 0 && firstSpaceToCut != null) {
      const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, lastPressedKey, firstSpaceToCut);
      heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
      player.play('sfx_sounds_fanfare3 (online-audio-converter.com).mp3');
      if (firstOneToCut != null && firstOneToCut !== -1) {
        heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut);
        player.play('sfx_sounds_fanfare3 (online-audio-converter.com).mp3');
      }
      actualScore += score.countScore(gameBoard);
    }
  };

  const moveLeftInterval = () => {
    clearInterval(moveDownInterval);
    clearInterval(moveUpInterval);
    clearInterval(moveRightInterval);
    if (playerke.yPosition !== 0) playerke = heroMovement.moveLeft(playerke, gameBoard);
    lastPressedKey = 'a';
    const firstSpaceToCut = heroMovement.findTheFirstSpace(gameBoard);
    const temporaryField = heroMovement.temporaryFieldAdder();
    if (temporaryField === 0 && firstSpaceToCut != null) {
      const firstOneToCut = heroMovement.checkingSidesDown(gameBoard, lastPressedKey, firstSpaceToCut);
      heroMovement.cuttingOutSpaces(gameBoard, lastPressedKey, firstSpaceToCut);
      player.play('sfx_sounds_fanfare3 (online-audio-converter.com).mp3');
      if (firstOneToCut != null && firstOneToCut !== -1) {
        heroMovement.cuttingOutOnes(gameBoard, lastPressedKey, firstOneToCut);
        player.play('sfx_sounds_fanfare3 (online-audio-converter.com).mp3');
      }
      actualScore += score.countScore(gameBoard);
    }
  };

  const putHeroBack = () => {
    playerke = {
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
    const temporaryDirection = outerMonsterMovement.directionExport();
    // if (lastPressedKey === '') gameBoard[1][31] = 2;
    console.clear();
    draw.draw(gameBoard);
    const actualPercent = percent.actualPercentFunc(gameBoard);
    collision.collision(arrayOfMonsters, temporaryDirection, outerMonster, gameBoard);
    const life = collision.lifeExport();
    if (actualLife > life) {
      putHeroBack();
      actualLife--;
      lastPressedKey = '';
    }
    const option = {
      font: 'GaintBold'
    };
    const text = font('\n\n LIFE    ' + chalk.green(actualLife.toString()), option);
    console.log(center(chalk.yellow(text), 8));

    const text3 = font('\n\n SCORE    ' + actualScore.toString(), option);
    console.log(center(chalk.yellow(text3), 8));

    const text2 = font('\n\n LEFT OF GAMEBOARD    ' + Math.ceil(actualPercent / maxOfField * 100), option);
    console.log(center(chalk.yellow(text2), 8));
    if (life === 0) {
      clearInterval(indexInterval);
      gameOver.gameOver();
      setTimeout(() => {
        menuMain.menuMain();
      }, 3000);
    }
    if (Math.ceil(actualPercent / maxOfField * 100) <= 25) {
      youWin.youWin();
      clearInterval(indexInterval);
    }
    if (arrayOfMonsters.length === 0) {
      clearInterval(indexInterval);
      console.clear();
      youWin.youWin();
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

  const indexInterval = setInterval(index, 60);
};

module.exports = {
  startGame: startGame
};
