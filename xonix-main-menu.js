const figlet = require('figlet');
const chalk = require('chalk');
const typeWrite = require('node-typewriter');
require('node-strings');
const menu = require('yat-menu');
const center = require('align-text');
const startGame = require('./start-game');
const mpg = require('mpg123');
var player = new mpg.MpgPlayer();

player.play('Retro_Game_Music_Compilation[grabfrom.com].mp3');

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

console.clear();

// START SCREEN

figlet.text(' X       O       N       I       X\n        G    A    M    E', {
  font: 'DOS Rebel',
  horizontalLayout: 'default',
  verticalLayout: 'default'
}, function (err, data) {
  if (err) {
    console.error(err);
  }
  typeWrite(chalk.yellow(data), 50, false, function () {
  });
});

figlet.text('       press  space', {
  font: 'DOS Rebel',
  horizontalLayout: 'default',
  verticalLayout: 'default'
}, function (err, data) {
  if (err) {
    console.error(err);
  }
  setTimeout(function () {
    console.log(chalk.red(data).blink());
  }, 4000);

  // PRESS SPACE TO CONTINUE
});
stdin.on('data', (key) => {
  const menuSound = () => {
    const mpg = require('mpg123');
    player = new mpg.MpgPlayer();
    player.play('sfx_menu_select1 (online-audio-converter.com).mp3');
  };
  if (key === ' ') {
    menuSound();
    console.clear();

    // MENU FUGGVENY ( START GAME, HIGHSCORES, EXIT BUTTON )

    const menuMain = () => {
      menu([center(chalk.yellow('START GAME'), 65),
        center(chalk.yellow(' EXIT'), 67)], {
        header: figlet.text('     m a i n   m e n u', {
          font: 'DOS Rebel',
          horizontalLayout: 'default',
          verticalLayout: 'default'
        }, function (err, data) {
          if (err) {
            console.error(err);
          }
          typeWrite(chalk.yellow(data), 50, false, function () {
          });
        })
      })

      // EXIT BUTTON

        .then(function (item) {
          if (item === center(chalk.yellow(' EXIT'), 67)) {
            figlet.text('             credits:\n  team rekurmez\n   misi, dori, plesa', {
              font: 'DOS Rebel',
              horizontalLayout: 'default',
              verticalLayout: 'default'
            }, function (err, data) {
              if (err) {
                console.error(err);
              }
              typeWrite(chalk.yellow(data), 50);
            });

            // EXIT GOMB ESETEN 10 MASODPERC MULVA KILEP A PROGRAMBOL
            menuSound();
            setTimeout(() => {
              process.exit();
            }, 10000);
          }

          // START GOMB

          if (item === center(chalk.yellow('START GAME'), 65)) {
            menuSound();
            startGame.startGame();
          }

          // HIGHSCORES GOMB
        }
        );
    };
    menuMain();
  }
});
stdin.on('data', (key) => {
  if (key === 'q') {
    process.exit();
  }
});
