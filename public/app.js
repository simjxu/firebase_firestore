var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");


// Function for what the click button does
function submitClick() {
	var firebaseRef = firebase.database().ref();
	firebaseRef.child("mote").set("New Value");
};

// Reference HTML section for an object before it was made, and then the database object
const macObject = document.getElementById("just_mac");
const preObject = document.getElementById("full_json_text");
const dbRefObject = firebase.database().ref().child("mote");

// Show in the console whenever a value changes in the realtime database
// dbRefObject.on("value", snap => console.log(snap.val()));

// // Display the JSON value of the value in the object(old)
// dbRefObject.on("value", snap => preObject.innerText = JSON.stringify(snap.val(), null, 3))

// Display the JSON value of the value in the object
var tmp = null
dbRefObject.on("value", (snap) => {
	tmp = snap.val()
	macObject.innerText = tmp.mac
	preObject.innerText = JSON.stringify(tmp, null, 3)
	console.log(tmp)
	test()
});

// // Example of parsing a json object
// console.log('{ "name":"John", "age":30, "city":"New York"}')
// var jsonobj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
// console.log(jsonobj.name)

function test() {
	console.log(tmp.mac)
}