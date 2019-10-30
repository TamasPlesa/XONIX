const matrix = [];
const height = 26;
const width = 63;
const frame = 2;

const gameBoardGenerator = (height, width, frame) => {
  for (let x = 0; x < height; x++) {
    matrix[x] = [];
    for (let y = 0; y < width; y++) {
      if (x < frame || x > height - frame - 1) {
        matrix[x][y] = '0';
      } else {
        matrix[x][y] = '1';
      }
      if (y < frame || y > width - frame - 1) {
        matrix[x][y] = '0';
      }
    }
  }
  return matrix;
};

module.exports = {
  gameBoardGenerator: gameBoardGenerator,
  matrix: matrix
}
;
