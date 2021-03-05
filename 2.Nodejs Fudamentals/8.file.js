
const fs = require('fs');

const file = fs.readFileSync('./4.log.js', { encoding: 'utf-8' }).toString();
console.log(file)

