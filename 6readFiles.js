
setupServer();

function setupServer() {
	var http = require("http");
	http.createServer(function(req, res) {
		readTheWebpage(req, res);
	}).listen(8080);
}

function readTheWebpage(req, res) {
	var fs = require("fs");
	fs.readFile("7demoWebPage.html", function(err, data) {
		writeContents(res, data);
	})
}

function writeContents(res, data) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(data);
	return res.end();
}
