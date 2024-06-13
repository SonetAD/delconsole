#!/usr/bin/env node
const delConsole = require('./delconsole');

const passedOption = process.argv[2] || './';

if (
  passedOption === '--help' ||
  passedOption === '-h' ||
  passedOption === 'help'
) {
  console.log(
    'Please run delconsole with your project directory.\nOR\nRun it without any arguments if you are in the project directory'
  );
} else {
  delConsole(passedOption);
}
