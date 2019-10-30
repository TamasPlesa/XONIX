const matrix = [];

const height = 26;
const width = 63;
const frame = 2;

const gameBoardGenerator = (height, width, frame) => {
  for (let x = 0; x < height; x++) {
    matrix[x] = [];
    for (let y = 0; y < width; y++) {
      if (x < frame || x > height - frame - 1) {
        matrix[x][y] = 0;
      } else {
        matrix[x][y] = 1;
      }
      if (y < frame || y > width - frame - 1) {
        matrix[x][y] = 0;
      }
    }
  }
  return matrix;
};

const gameBoard = gameBoardGenerator(height, width, frame);

const monster = {
  x: 6,
  y: 25,
  xd: 1,
  yd: -1
};

const monsterMovement = (monster, gameBoard) => {
  const temp = {
    x: monster.x,
    y: monster.y
  };
  monster.x += Number(monster.xd);
  monster.y += Number(monster.yd);
  gameBoard[monster.x][monster.y] = ' ';
  gameBoard[temp.x][temp.y] = 1;
  if (gameBoard[monster.x - 1][monster.y] === 0 || gameBoard[monster.x + 1][monster.y] === 0) {
    monster.xd *= -1;
  }
  if (gameBoard[monster.x][monster.y - 1] === 0 || gameBoard[monster.x][monster.y + 1] === 0) {
    monster.yd *= -1;
  }
  console.clear();
  console.log(gameBoard.join('\n'));
};

const bounce = (monster, gameBoard) => {
  if (gameBoard[monster.x - 1][monster.y] === 0 || gameBoard[monster.x + 1][monster.y] === 0) {
    monster.xd *= -1;
  }
  if (gameBoard[monster.x][monster.y - 1] === 0 || gameBoard[monster.x][monster.y + 1] === 0) {
    monster.yd *= -1;
  }
};

// belso golyo : 4
// kulso golyo: 3

setInterval(() => { monsterMovement(monster, gameBoard); }, 100);

bounce(monster, gameBoard);
