// Link to website:
// https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp

// This script makes use of the "formidable" module 
// It handles Uploading of files.

// Command to install formidable module:
// npm install formidable

var http = initializeHttpModule();
var myFileSystem = require("./readingHtmlFromFile");

/*
http.createServer(function (request, response) {
	console.log("Hello World!");
}).listen(8080);
*/
http.createServer(displayWebpage).listen(8080);

//========================================================
function initializeHttpModule() {
	return require("http");
}

function displayWebpage(request, response) {

	var nameOfFileToBeOpened = "./fileUploadWebpage.html";
	myFileSystem.readWebsiteFromFileAndDisplay(nameOfFileToBeOpened, response);

}



