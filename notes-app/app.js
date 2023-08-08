const fs = require("fs");

// fs.writeFileSync("notes.txt", "my name is john cenaaa");

fs.appendFileSync('notes.txt', ' wazaaaaap');


// $ node app.js

//that would work also, but stick with convention
// const files = require('fs');
// files.writeFileSync('notes.txt', 'my name is john');
