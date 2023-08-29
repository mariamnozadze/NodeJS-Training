//task for JSON
//{"name":"Andrew","planet":"Earth","age":27}

const fs = require('fs');

//1. load and parse json data
const dataBuffer = fs.readFileSync('test-json.json');
const dataJSON = dataBuffer.toString();
const user= JSON.parse(dataJSON)

//2.change the data
user.name = 'Mariam';
user.age = 26;

//3. stringify changed object and rewrite the original
const userJSON = JSON.stringify(user);
fs.writeFileSync('test-json.json', userJSON);

//4. test 
// $ node test-json.js
//{"name":"Mariam","planet":"Earth","age":26}