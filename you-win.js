const youWin = () => {
  console.clear();
  const figlet = require('figlet');
  const chalk = require('chalk');
  require('node-strings');
  const mpg = require('mpg123');
  const player = new mpg.MpgPlayer();

  player.play('sfx_sounds_powerup2.mp3');

  figlet.text('\n          y o u   w i n', {
    font: 'DOS Rebel',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, function (err, data) {
    if (err) {
      console.error(err);
    }

    console.log(chalk.green(data.blink()));
  });
  setTimeout(function () {
    process.exit();
  }, 5000);
};
module.exports = {
  youWin: youWin
};
