
const http = require('http')


const server = http.createServer((req, res) => {
	res.end("Hello world from nodeJs")
})

server.listen(3000)


