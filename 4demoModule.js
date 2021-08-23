var http = require("http");
var myModule = require("./3myFirstDateTimeModule");

http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("The date and time are currently: " + myModule.myDateTime());
	res.end();
}).listen(8080);
