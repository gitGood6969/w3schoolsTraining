// Link to website:
// https://www.w3schools.com/nodejs/nodejs_mysql.asp

// This script requires MySQL Database to be installed before hand.
// You can find the installation details at the following link:
// https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04

// Do ensure that when creating the user, 
// they are identified with "mysql_native_password" 
// or you might get authentication errors.

// To check if MySQL is running:
// systemctl status mysql.service

// To start MySQL (if its not running):
// sudo systemctl start mysql

// To stop MySQL from auto-starting upon bootup:
// sudo systemctl disable mysql

// It also requires the MySQL Driver/Module to establish 
// connection to the database.
// npm install mysql

var mysql = initializeMySqlModule();

var loginCredentials = {
	host: "localhost",
	user: "test",
	password: "P@ssword123"
};

var connection = configureConnectionToMysqlUsingLoginCredentials(mysql, loginCredentials);

establishConnectionToMysqlDb(connection);
//=====================================================
function initializeMySqlModule() {
	return require("mysql");
}

function configureConnectionToMysqlUsingLoginCredentials(mysql, loginCredentials) {
	return mysql.createConnection(loginCredentials);
}

function establishConnectionToMysqlDb(connection) {
	connection.connect(postConnectionHandler);
}

function postConnectionHandler(error) {
	displayErrorsIfAny(error);
	console.log("Connected!");
}

function displayErrorsIfAny(error) {
	if (error) throw error;
}



