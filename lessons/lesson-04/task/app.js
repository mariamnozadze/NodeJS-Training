const chalk = require("chalk");
const { describe } = require("yargs");
const yargs = require('yargs');
const getNotes = require("./notes.js");

//customize yargs version
yargs.version('1.1.0')

//add, remove, read, list

//create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function(){
    console.log('Adding a new note')
  }
})

//Create remove command
yargs.command({
  command: 'add',
  describe: 'Remove note',
  handler: function(){
    console.log('Removing the note')
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe: 'list note',
  handler: function(){
    console.log('Listing the note')
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe: 'Read note',
  handler: function(){
    console.log('Reading the note')
  }
})

console.log(yargs.argv)