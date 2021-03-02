const https = require("https-localhost")()
const path = require("path")
// https is an express https, do what you usually do with express

https.get('*', (req, res) => {
	// console.log(req);
	res.sendFile(path.join(__dirname + req.url))
})

https.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
})

https.listen()