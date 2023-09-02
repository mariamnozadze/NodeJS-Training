const fs = require("fs");
const chalk = require("chalk");

//  retrieve notes
const getNotes = () => {
  return "Your notes";
};

// add a new note
const addNote = (title, body) => {
  // Load existing notes
  const notes = loadNotes();

  //Check for duplicate notes
  //--function runs one time for each note (so if there's 20 note, it'll run 20 times)

  //arrow func
  const duplicateNotes = notes.filter((note) => note.title === title);

  //no arrow func
  // const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title;
  // });

  //If no duplicates found, add the new note
  if (duplicateNotes.length === 0) {
    // Push the new note to the notes array
    notes.push({
      title: title,
      body: body,
    });

    // Save the updated notes
    saveNotes(notes);
    console.log(chalk.green.inverse("new note added"));
  } else {
    console.log(chalk.red.inverse("note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  // Create a new array with notes that don't match the given title (to keep)
  //arrow func
  const notesToKeep = notes.filter((note) => note.title !== title);

  //no arrow func
  // const notesToKeep = notes.filter(function (note) {
  //   return note.title !== title;
  // });

  // Check if a note was removed and update the notes
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }

  // Save the updated notes (even if no note was removed)
  saveNotes(notesToKeep);
};

// save notes to a file
const saveNotes = (notes) => {
  // Convert notes array to JSON format
  const dataJSON = JSON.stringify(notes);

  // Write JSON data to 'notes.json' file
  fs.writeFileSync("notes.json", dataJSON);
};

//  load notes from a file
const loadNotes = () => {
  try {
    // Read data from 'notes.json' file
    const dataBuffer = fs.readFileSync("notes.json");

    // Convert data to JSON format
    const dataJSON = dataBuffer.toString();

    // Parse JSON data into an array of notes
    return JSON.parse(dataJSON);
  } catch (e) {
    // If 'notes.json' doesn't exist or there's an error, return an empty array
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
