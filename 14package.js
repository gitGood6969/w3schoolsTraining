// To nstall a package:
// npm install <name_of_package>

// For this script we will use the "upper-case" package
// npm install upper-case

// When modules are installed, a "node_modules" folder is 
// created to store them

var httpModule = initializeHttpModule();
var upperCaseModule = initializeUpperCaseModule();

httpModule.createServer(function (requestByUser, responseSentToUser) {

    var message = "Hello World!";
	var messageInUpperCase = convertToUpperCase(message);

	displayMessageInWebpage(messageInUpperCase, responseSentToUser);
	
}).listen(8080);

function initializeHttpModule() {
	return require("http");
}

function initializeUpperCaseModule() {
	return require("upper-case");
}

function convertToUpperCase(message) {
	return upperCaseModule.upperCase(message);
}

function displayMessageInWebpage(messageInUpperCase, responseSentToUser) {
	responseSentToUser.writeHead(200, {"Content-Type": "text/html"});
	responseSentToUser.write(messageInUpperCase);
	responseSentToUser.end();
}

