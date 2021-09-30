// Link to website:
// https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp

var fs = initializeFileSystemModule();

function initializeFileSystemModule() {
	return require("fs");
}

function readWebsiteFromFileAndDisplay(nameOfFileToBeOpened, response) {
	fs.readFile(nameOfFileToBeOpened, function(err, data) {
		processFileData(err, data, response);
	});
}

function processFileData(err, data, response) {
	if (thereIsNoErrorMessageAsPageExists(err)) {
		displayRequestedWebpage(data, response);
	} else {
		displayErrorWebpage(response);		
	}
}

function thereIsNoErrorMessageAsPageExists(err) {
	return !err;
}

function displayRequestedWebpage(data, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(data);
	return response.end();
}

function displayErrorWebpage(response) {
	response.writeHead(404, {"Content-Type": "text/html"});
	return response.end("404 Not Found");
}

module.exports = {
	readWebsiteFromFileAndDisplay
};