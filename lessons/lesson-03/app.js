const validator = require('validator');
const getNotes = require("./utils.js");

const msg = getNotes();

console.log(msg);

// console.log(validator.isEmail('mariam@example.com')) -- true
// console.log(validator.isEmail('example.com')) -- false

// console.log(validator.isURL('https://mead.io')) //---true
console.log(validator.isURL('https/mead.io')) //---false