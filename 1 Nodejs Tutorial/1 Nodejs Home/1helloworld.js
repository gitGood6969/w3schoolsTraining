// Website Link:
// https://www.w3schools.com/nodejs/default.asp

var http = require("http");

http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World!");
}).listen(8080);
