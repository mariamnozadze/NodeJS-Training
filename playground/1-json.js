const fs = require('fs')
/** 
//stringify ---- to takean object and convert into json
//parse ------ take json data in an convert into an object
*/


// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON) // node 1-json.js ----> creates json file in folder

const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer.toString()); 
//{"title":"Ego is the enemy","author":"Ryan Holiday"}
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)
console.log(data.title) //Ego is the enemy



// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// // console.log(bookJSON.title) //undefined --->JSON data DOESN'T have title property, book object DOES have

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author) //Ryan Holiday