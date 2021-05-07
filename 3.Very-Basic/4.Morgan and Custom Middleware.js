const express = require('express')
const morgan = require('morgan')
const app = express();

// Middleware morgan
app.use(morgan("dev"));

// My own middleware
const myOwnMiddleware = (req, res, next) => {
	console.log('Middleware Applied')
	next();
}
app.use(myOwnMiddleware)

// Routing here

const postRoutes = require('./routes/post')
app.get('/', postRoutes.getPosts)

const port = 8080

app.listen(port, () => {
	console.log(`A Node Js API listening on port: ${port}`)
});