console.log('Hello from Node.js');

// Writing the text to a file

const fs = require('fs');  // fs - filesystem
fs.writeFileSync('hello.txt', 'Hello from Node.js Brother');