const chalk = require("chalk");
const { describe } = require("yargs");
const yargs = require("yargs");
const getNotes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

//add, remove, read, list

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

//Create remove command
yargs.command({
  command: "add",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

console.log(yargs.argv);
