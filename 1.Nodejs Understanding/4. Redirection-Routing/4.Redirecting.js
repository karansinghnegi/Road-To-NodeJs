// Creating a SERVER Here

const http = require('http');   // Launching Server, Sending Request Package
const fs = require('fs');       // Filesystem Package

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // Routing Dependence Page
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><h1>Response From Server</h1><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;                        // Redirection
                res.setHeader('Location', '/');
                return res.end();
            });
            
        });
       
    }
  
});

// Server listening on localhost:3000

server.listen(3000);
