const fs = require('fs');
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

let dataBuffer = fs.readFileSync('1-json.json').toString();
let data = JSON.parse(dataBuffer)
data.name = 'Jules'
data.age = 34;
const str = JSON.stringify(data)
fs.writeFileSync('1-json.json', str)



