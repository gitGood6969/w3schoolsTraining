var fs = require("fs");

renameFile(fs)

function renameFile(fs) {
	var originalFile = "mynewfile1.txt";
	var newFileName = "myrenamedfile.txt";

	fs.rename(originalFile, newFileName, function (err) {
		displayErrorMessageIfAny(err);
		displayMessage("File Renamed!");
	});
}

function displayErrorMessageIfAny(err) {
	if (err) throw err;	
}

function displayMessage(msg) {
	console.log(msg);
}