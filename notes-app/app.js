const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

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
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
});


//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove note",
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "list note",
  handler () {
    console.log("Listing the note");
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read note",
  handler () {
    console.log("Reading the note");
  },
});

// console.log(yargs.argv);
yargs.parse();
