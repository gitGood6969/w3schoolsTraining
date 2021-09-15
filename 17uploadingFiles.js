// Link to website:
// https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp

// This script makes use of the "formidable" module. It handles Uploading of files.
// npm install formidable

// This script consists of 3 components:
// 1) 17uploadingFiles.js
// 2) readingHtmlFromFile.js
// 3) fileUploadWebpage.html


var http = initializeHttpModule();
var formidable = initializeFormidableModule(); 
var fs = initializeFileSystemModule();
var myFileSystem = initializePersonalFileSystemHandling();

/*
http.createServer(function (request, response) {
	console.log("Hello World!");
}).listen(8080);
*/
http.createServer(setupWebpage).listen(8080);

//========================================================
function initializeHttpModule() {
	return require("http");
}

function initializeFormidableModule() {
	return require("formidable");
}

function initializeFileSystemModule() {
	return require("fs");
}

function initializePersonalFileSystemHandling() {
	return require("./readingHtmlFromFile");
}

function setupWebpage(request, response) {
	if (requestUrlHasFileUpload(request)) {
		parseTheUploadedFile(request, response);
	} else {
		displayFileUploadWebpage(request, response);
	}
}

function requestUrlHasFileUpload(request) {
	return (request.url == "/fileupload" ? true : false);
}

function displayFileUploadWebpage(request, response) {
	var nameOfFileToBeOpened = "./fileUploadWebpage.html";
	myFileSystem.readWebsiteFromFileAndDisplay(nameOfFileToBeOpened, response);
}

function parseTheUploadedFile(request, response) {

	var form = createFormHandlerObjectUsingFormidable();
	form.parse(request, function (errors, fields, files) {
		
		// Package variables into a Map data structure for easier handling
		const parseOutputs = new Map();
		parseOutputs.set("errors",errors);
		parseOutputs.set("fields",fields);
		parseOutputs.set("files",files);
		parseOutputs.set("response",response);

		dealWithFileAfterParsing(parseOutputs);
	});
	
}

function createFormHandlerObjectUsingFormidable() {
	return new formidable.IncomingForm();
}

function dealWithFileAfterParsing(parseOutputs) {

	// extracts data on files
	var files = parseOutputs.get("files");
	var temporaryFilePath = getTemporaryFilePathFrom(files);
	var nameOfFile = getNameOfFileFrom(files);
	var newPathToStoreFile = "./" + nameOfFile;

	// save the file 
	fs.rename(temporaryFilePath, newPathToStoreFile, function (err) {
		displayErrorMessageIfAny(err);
		var response = parseOutputs.get("response");
		response.write("File uploaded");
		response.end();
	});
}

function getTemporaryFilePathFrom(files) {
	return files.filetoupload.path;
}

function getNameOfFileFrom(files) {
	return files.filetoupload.name;
}

function displayErrorMessageIfAny(err) {
	if (err) throw err;	
}

