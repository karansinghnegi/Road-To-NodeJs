// Creating a SERVER Here

const http = require('http');      
const routes = require('./routes');

const server = http.createServer(routes);

// Server listening on localhost:3000

server.listen(3000);
