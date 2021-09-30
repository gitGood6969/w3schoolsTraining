// Website Link:
// https://www.w3schools.com/nodejs/nodejs_filesystem.asp

// Run 8creatingFiles.js first before executing this script

var fs = require("fs");

appendToAFile(fs);
writeToAFile(fs);

function appendToAFile(fs) {
	var fileToBeOpened = "mynewfile1.txt";
	var stringToBeAppended = "\nThis is my text.\n"; 

	fs.appendFile(fileToBeOpened, stringToBeAppended, function (err) {
		displayErrorMessageIfAny(err);
		displayMessage("Updated!");
	});
}

function writeToAFile(fs) {
	var fileToBeOpened = "mynewfile3.txt";
	var stringToBeAppended = "This is my text.\n";

	fs.writeFile(fileToBeOpened, stringToBeAppended, function (err) {
		displayErrorMessageIfAny(err);
		displayMessage("Replaced!");
	});
}

function displayErrorMessageIfAny(err) {
	if (err) throw err;	
}

function displayMessage(msg) {
	console.log(msg);
}


