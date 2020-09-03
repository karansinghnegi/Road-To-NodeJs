// Creating a SERVER Here

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

// Server listening on localhost:3000

server.listen(3000);
