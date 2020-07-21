const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const notes = getNotes();
console.log(notes);

console.log(validator.isURL('juultutby.com'));

const name = 'Jules';
console.log(chalk.green.inverse.underline('Hello %s'), name);

console.log(chalk.blue('Hello world!'));
console.log(chalk.bold.underline.rgb(10, 100, 200)('Hello!'));
console.log(chalk.bold.rgb(10, 100, 200)`Hello!`);
console.log(chalk`{bold.rgb(10,100,200) Hello!}`);