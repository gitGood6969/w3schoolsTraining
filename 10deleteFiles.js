var fs = require("fs");

deleteAFile(fs)

function deleteAFile(fs) {
	var fileToBeDeleted = "mynewfile2.txt";

	fs.unlink(fileToBeDeleted, function (err) {
		displayErrorMessageIfAny(err);
		displayMessage("File deleted!");
	});
}

function displayErrorMessageIfAny(err) {
	if (err) throw err;	
}

function displayMessage(msg) {
	console.log(msg);
}