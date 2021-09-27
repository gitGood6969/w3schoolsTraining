// Website Link:
// https://www.w3schools.com/nodejs/nodejs_filesystem.asp

var fs = require("fs"); // Global Variable here

appendToAFile(fs);
openAFile(fs);
writeToAFile(fs);

function appendToAFile(fs) {
	var nameOfFile = "mynewfile1.txt";
	var contentToBeAddedToFile = "Hello Content!";
	
	fs.appendFile(nameOfFile, contentToBeAddedToFile, function (err) {
		displayErrorMessageIfAny(err);
		displaySuccessfulMessageAdded();
	});
}

function openAFile(fs) {
	var nameOfFile = "mynewfile2.txt";
	var flag = "w";

	fs.open(nameOfFile, flag, function (err, file) {
		displayErrorMessageIfAny(err);
		displaySuccessfulMessageAdded();
	});
}

function writeToAFile(fs) {
	var nameOfFile = "mynewfile3.txt";
	var contentToBeAddedToFile = "Hello content!";

	fs.writeFile(nameOfFile, contentToBeAddedToFile, function (err) {
		displayErrorMessageIfAny(err);
		displaySuccessfulMessageAdded();
	});
} 

function displayErrorMessageIfAny(err) {
	if (err) throw err;	
}

function displaySuccessfulMessageAdded() {
	console.log("Saved!");
}
