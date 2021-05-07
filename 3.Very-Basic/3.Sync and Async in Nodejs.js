const fs = require('fs')

const fileName = 'target.txt'
const data = fs.readFileSync(fileName)
console.log(data)


fs.readFile(fileName, (err, data) => {
	if(err) console.log(err)
	console.log(data.toString())
})


console.log('Nodejs Async Programming')