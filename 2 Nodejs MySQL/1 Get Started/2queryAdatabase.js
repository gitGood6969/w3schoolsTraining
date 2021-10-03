// Link to website:
// https://www.w3schools.com/nodejs/nodejs_mysql.asp

// Refer to 1createConnection.js for installation 
// and operation instructions

// This script will not execute properly unless you add the
// appropriate "valid" sql query.

var mysql = initializeMySqlModule();

var loginCredentials = {
	host: "localhost",
	user: "yourMySqlUsername",
	password: "yourMySqlPassword"
};

var connection = configureConnectionToMysqlUsingLoginCredentials(mysql, loginCredentials);
establishConnectionToMysqlDb(connection);

var sqlQuery = "Put SQL Query here!"; // Change Query to a "Valid" one.
executeSqlQueryUsingConnectionToMysqlDb(sqlQuery, connection);
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
	displayConnectionSuccessMessage();
}

function displayErrorsIfAny(error) {
	if (error) throw error;
}

function displayConnectionSuccessMessage() {
	console.log("Connected!");
}

function executeSqlQueryUsingConnectionToMysqlDb(sqlQuery, connection) {
	connection.query(sqlQuery, postSqlQueryHandler);
}

function postSqlQueryHandler (error, result) {
	displayErrorsIfAny(error);
	displayResultOfSqlQuery(result);
}

function displayResultOfSqlQuery(result) {
	console.log("Result: " + result);
}