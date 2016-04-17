'use strict';

const chalk = require('chalk');

module.exports = function prompt(message, options) {
  return new Promise((resolve, reject) => {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    let hint = '';

    for (const o in options) {
      hint += o;
    }

    hint = hint.charAt(0).toUpperCase() + hint.substr(1).toLowerCase();

    rl.question(
      chalk.yellow('? ') +
      chalk.bold(message) + ' ' +
      chalk.dim('(' + hint + ')') + '\n', (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}
