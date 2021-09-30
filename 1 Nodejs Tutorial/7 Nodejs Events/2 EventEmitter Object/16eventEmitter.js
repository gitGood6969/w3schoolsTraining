// Link to Website: 
// https://www.w3schools.com/nodejs/nodejs_events.asp

var events = initializeEventsModule();
var eventEmitter = createEventEmitterObjectFromEventsModule(events);

/*
var myEventHandler = function () {
	console.log("I hear a scream!");
}
*/
var myEventHandler = createAnEventHandler(); 

assignTheEventHandlerToAnEvent(eventEmitter, myEventHandler);
fireTheScreamEvent(eventEmitter);

//===============================================
function initializeEventsModule() {
	return require("events");
}

function createEventEmitterObjectFromEventsModule(events) {
	return new events.EventEmitter();
}

function createAnEventHandler() {
	// Assigning a function to a variable 
	// (Similar to the concept of "nicknames" given to "people")
	// https://stackoverflow.com/questions/36664097/js-assigning-function-to-variable
	//var myEventHandler = displayScreamMessage;
	return displayScreamMessage;
}

function displayScreamMessage() {
	console.log("I hear a scream!");
}

function assignTheEventHandlerToAnEvent(eventEmitter, myEventHandler) {
	var eventToListenFor = "scream";
	eventEmitter.on(eventToListenFor, myEventHandler);
}

function fireTheScreamEvent(eventEmitter) {
	var eventToFire = "scream";
	eventEmitter.emit(eventToFire);
}