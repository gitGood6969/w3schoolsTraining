// Website Link:
// https://www.w3schools.com/nodejs/nodejs_url.asp

// To access the webpages, in a web browser type:
// http://localhost:8080/summer.html
// http://localhost:8080/winter.html

var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (urlRequestFromUser, urlResponseToBeSentToUser) {

	var urlAddressAsString = getUrlAddressFrom(urlRequestFromUser);
	var urlObject = convertUrlStringToUrlObject(urlAddressAsString);
	var nameOfFileToBeOpened = getFileNameFrom(urlObject);

	readFileAndDisplayWebpage(nameOfFileToBeOpened, urlResponseToBeSentToUser);
	
}).listen(8080);

function getUrlAddressFrom(urlRequestedbyUser) {
	return urlRequestedbyUser.url;
}

function convertUrlStringToUrlObject(urlAddressAsString) {
	return url.parse(urlAddressAsString, true); 
}

function getFileNameFrom(urlObject) {
	return "." + urlObject.pathname;
}

function readFileAndDisplayWebpage(nameOfFileToBeOpened, urlResponseToBeSentToUser) {
	fs.readFile(nameOfFileToBeOpened, function(err, data) {
		displayWebpage(err, data, urlResponseToBeSentToUser);
	});
}

function displayWebpage(err, data, urlResponseToBeSentToUser) {
	if (thereIsNoErrorMessageAsPageExists(err)) {
		displayRequestedWebpage(data, urlResponseToBeSentToUser);
	} else {
		displayErrorWebpage(urlResponseToBeSentToUser);		
	}
}

function thereIsNoErrorMessageAsPageExists(err) {
	return !err;
}

function displayRequestedWebpage(data, urlResponseToBeSentToUser) {
	urlResponseToBeSentToUser.writeHead(200, {"Content-Type": "text/html"});
	urlResponseToBeSentToUser.write(data);
	return urlResponseToBeSentToUser.end();
}

function displayErrorWebpage(urlResponseToBeSentToUser) {
	urlResponseToBeSentToUser.writeHead(404, {"Content-Type": "text/html"});
	return urlResponseToBeSentToUser.end("404 Not Found");
}

