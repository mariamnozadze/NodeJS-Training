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
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);
  },
});
//node app.js  add --title="Buy" --body="These are what i need to buy"
//Title:  Buy
//Body:  These are what i need to buy


//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove note",
  handler: function () {
    console.log("Removing the note");
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "list note",
  handler: function () {
    console.log("Listing the note");
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read note",
  handler: function () {
    console.log("Reading the note");
  },
});

// console.log(yargs.argv);
yargs.parse();
