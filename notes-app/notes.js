const fs = require("fs");

//  retrieve notes
const getNotes = function () {
  return "Your notes";
};

// add a new note
const addNote = function (title, body) {
  // Load existing notes
  const notes = loadNotes();

  // Push the new note to the notes array
  notes.push({
    title: title,
    body: body,
  });

  // Save the updated notes
  saveNotes(notes);
};

// save notes to a file
const saveNotes = function (notes) {
  // Convert notes array to JSON format
  const dataJSON = JSON.stringify(notes);

  // Write JSON data to 'notes.json' file
  fs.writeFileSync("notes.json", dataJSON);
};

//  load notes from a file
const loadNotes = function () {
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
};
