// Website Link:
// https://www.w3schools.com/nodejs/nodejs_url.asp

var url = require("url");

var urlAddress = getUrlAddress();
var urlObject = convertUrlStringToUrlObject(urlAddress);  

displayHostnameOf(urlObject);
displayPathNameOf(urlObject);
displaySearchQueryOf(urlObject);

var queryDataObject = convertSearchQueryInUrlObjectToQueryDataObject(urlObject);
displayRaw(queryDataObject);

displayMonthIn(queryDataObject);
displayYearIn(queryDataObject);

function getUrlAddress() {
	return "http://localhost:8080/default.htm?year=2017&month=february";
}

function convertUrlStringToUrlObject(urlAddress) {
	return url.parse(urlAddress, true); 
}

function displayHostnameOf(urlObject) {
	console.log("This is the hostname:" + urlObject.host);
}

function displayPathNameOf(urlObject) {
	console.log("This is the pathname: " + urlObject.pathname);
}

function displaySearchQueryOf(urlObject) {
	console.log("This is the Search Query: " + urlObject.search);
}

function convertSearchQueryInUrlObjectToQueryDataObject(urlObject) {
	return urlObject.query; 
}

function displayRaw(queryDataObject) {
	console.log("This is the raw query data as an object: " + JSON.stringify(queryDataObject)); 
}

function displayMonthIn(queryDataObject) {
	console.log("This is the month: " + queryDataObject.month);
}

function displayYearIn(queryDataObject) {
	console.log("This is the year: " + queryDataObject.year);
}
