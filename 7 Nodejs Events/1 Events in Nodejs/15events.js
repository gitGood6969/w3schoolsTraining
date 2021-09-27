// Website Link:
// https://www.w3schools.com/nodejs/nodejs_events.asp

var fileSystemModule = initializeFileSystemModule();

var fileToBeRead = "./demofile.txt";
var eventListenerForFile = newEventListenerFrom(fileSystemModule, fileToBeRead);

setFileEventListenerToDisplayWhenFileIsOpened(eventListenerForFile);

//========================================
function initializeFileSystemModule() {
	return require("fs");
}

function newEventListenerFrom(fileSystemModule, fileToBeRead) {
	return fileSystemModule.createReadStream(fileToBeRead);
}

function setFileEventListenerToDisplayWhenFileIsOpened(eventListenerForFile) {
	eventListenerForFile.on("open", function () {
		displayFileSuccessfullyOpen();
	});
}

function displayFileSuccessfullyOpen() {
	console.log("The file is open");
}
