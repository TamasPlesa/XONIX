const menuMain = require('./xonix-main-menu');

const gameOver = () => {
  console.clear();
  const figlet = require('figlet');
  const chalk = require('chalk');
  require('node-strings');
  const mpg = require('mpg123');
  const player = new mpg.MpgPlayer();

  player.play('sfx_sounds_negative1.mp3');

  figlet.text('\n     g a m e   o v e r', {
    font: 'DOS Rebel',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, function (err, data) {
    if (err) {
      console.error(err);
    }

    console.log(chalk.red(data.blink()));
  });
  setTimeout(function () {
    process.exit();
  }, 5000);
};
module.exports = {
  gameOver: gameOver
};
