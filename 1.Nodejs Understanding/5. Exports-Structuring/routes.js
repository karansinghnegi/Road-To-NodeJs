const fs = require('fs');

const requestHandler= (req, res) => {
    const url = req.url;
    const method = req.method;

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
            res.statusCode = 302;                    
            res.setHeader('Location', '/');
            return res.end();
        });    
    });
   
    }
}

module.exports = requestHandler;

/** 
 * Other way to Export: Alternative Way (For multiple Exports)
 * module.exports = {
 *      handler: requestHandler
 *  }
 **/ 

 /**
  * Third Way for Exporting:
  * module.exports.handler = requestHandler;
 */

  /**Last Way for Exporting:
   * exports.handler = requestHandler
  */