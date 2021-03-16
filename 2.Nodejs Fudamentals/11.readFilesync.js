const fs = require('fs');

const read = fs.readFileSync('./4.log.js', { encoding:'utf-8'}).toString()

console.log(read)