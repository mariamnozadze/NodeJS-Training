const add = require("./utils.js");

const sum = add(4, -2);

console.log(sum);
//utils.js
//2

// const personName = require('./utils.js');

// console.log(personName);
// //utils.js
// //Mike

/**
 * app.js cannot access the variables in utils.js.
both of them have their own scope.
--so to use name from utils we have to export all of the stuff the file should share with the outside world
 */
