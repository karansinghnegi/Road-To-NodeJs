const express = require('express')
const app = express()


app.get('/', (req, res) => {
	console.log(req)
	res.send("Give yourself 3years and you will be way ahead from others")
})


app.listen(4000)