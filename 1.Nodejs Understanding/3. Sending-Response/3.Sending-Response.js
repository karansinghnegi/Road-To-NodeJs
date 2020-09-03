// Creating a SERVER Here

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.headers); 
    console.log(req.url);
    console.log(req.method) 

    // Sending the RESPONSE
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Firse Response</title></head>');
    res.write('<body>My Response Coming From Server</body>');
    res.write('</html>');
    res.end();
});

// Server listening on localhost:3000

server.listen(3000);
