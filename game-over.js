const gameOver = () => {
  const figlet = require('figlet');
  const chalk = require('chalk');
  require('node-strings');

  figlet.text('\n     g a m e   o v e r', {
    font: 'DOS Rebel',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, function (err, data) {
    if (err) {
      console.error(err);
    }

    console.log(chalk.red(data).blink());
  });
};

gameOver();
setTimeout(function () {
  process.exit();
}, 5000);

module.exports = {
  gameOver: gameOver
};
