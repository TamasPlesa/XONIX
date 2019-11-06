const figlet = require('figlet');
const chalk = require('chalk');
const typeWrite = require('node-typewriter');
require('node-strings');
const menu = require('yat-menu');
const center = require('align-text');
const fs = require('fs');
const startGame = require('./start-game');

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
  }, 5000);

  // PRESS SPACE TO CONTINUE
});
stdin.on('data', (key) => {
  if (key === ' ') {
    console.clear();

    // MENU FUGGVENY ( START GAME, HIGHSCORES, EXIT BUTTON )

    const menuMain = () => {
      menu([center(chalk.yellow('START GAME'), 65),
        center(chalk.yellow('HIGHSCORES'), 65),
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

            setTimeout(() => {
              process.exit();
            }, 10000);
          }

          // START GOMB

          if (item === center(chalk.yellow('START GAME'), 65)) {

          }

          // HIGHSCORES GOMB

          if (item === center(chalk.yellow('HIGHSCORES'), 65)) {
            fs.readFile('/home/plesa/users.txt', function (err, data) {
              if (err) {
                console.error(err);
              }

              // 1 mp-t vár, hogy a highscores kiíródjon, majd kihúzza sorban a highscorest.

              setTimeout(() => {
                typeWrite(chalk.yellow(center(data.toString(), 68)));
              }, 1000);

              // HIGHSCORES FELIRAT

              figlet.text('     h i g h s c o r e s', {
                font: 'DOS Rebel',
                horizontalLayout: 'default',
                verticalLayout: 'default'
              }, function (err, data) {
                if (err) {
                  console.error(err);
                }

                console.log(chalk.yellow(data).blink());
              });
              setTimeout(function () {
                menuMain();
              }, 10000);
            });
          }
        });
    };
    menuMain();
  }
});
stdin.on('data', (key) => {
  if (key === 'q') {
    process.exit();
  }
});
