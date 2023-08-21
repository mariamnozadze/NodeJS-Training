const chalk = require('chalk');
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

const greet = chalk.green.inverse.bold('success');
console.log(greet)