//task-03 -- coloring a console
const chalk = require('chalk')

// const text = chalk.bold.green;
// const text = chalk.bold.red;
// const text =  chalk.hex('#FFA500');
// const text = chalk.underline.green;
// const text = chalk.bgWhite.red;
const text = chalk.green.inverse.bold("Congrats!")
console.log(text);

// console.log(text("Success"));
console.log(chalk.red.bgWhite("oplaaaa"))
