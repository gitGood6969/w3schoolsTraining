// Link to website:
// https://www.w3schools.com/nodejs/nodejs_email.asp

// This script requires the Nodemailer module:
// npm install nodemailer

// Do note that due to Google's security settings, the script will not run properly.
// To resolve this issue, follow in instuctions on the following link:
// https://support.google.com/mail/?p=BadCredentials

var nodemailer = initializeNodemailerModule(); 

var emailAccountDetails = {
	service: "gmail",
	auth: {
		user: "yourEmail@gmail.com",
		pass: "yourPassword"
	}
};
var transporter = specifyEmailAccountDetailsIntoNodemailer(nodemailer, emailAccountDetails);

var emailContent = {
	from: "yourEmail@gmail.com",
	to: "myFriend@yahoo.com",
	subject: "Sending Email using Node.js",
	text: "That was easy!"
};

// Multiple Recipients
/*
var emailContent = {
	from: "yourEmail@gmail.com",
	to: "myFriend@yahoo.com, myOtherFriend@yahoo.com",
	subject: "Sending Email using Node.js",
	text: "That was easy!"
};
*/

// Send HTML
/*
var emailContent = {
	from: "yourEmail@gmail.com",
	to: "myFriend@yahoo.com",
	subject: "Sending Email using Node.js",
	html: "<h1>Welcome</h1><p>That was easy!</p>"
};
*/

transporter.sendMail(emailContent, function(error, info) {
	if (thereIsNo(error)) {
		console.log("Email sent: " + info.response);
	} else {
		console.log(error);
	}
});

//==========================================================
function initializeNodemailerModule() {
	return require("nodemailer");
}

function specifyEmailAccountDetailsIntoNodemailer(nodemailer, emailAccountDetails) {
	return nodemailer.createTransport(emailAccountDetails);
}

function thereIsNo(error) {
	return !error;
}
