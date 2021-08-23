var http = require("http");
var url = require("url");

// create a server object:
http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/html"}); // http header
	
	//res.write("Hello World!"); // write a response
	
	//res.write(req.url); // "req" -> holds the part of the url that comes after the domain name
	
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	
	res.end(txt); // end the response
}).listen(8080); // the server object listens on port 8080

