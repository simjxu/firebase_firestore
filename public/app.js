var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

console.log("test")

// Function for what the click button does
function submitClick() {
	var firebaseRef = firebase.database().ref();
	firebaseRef.child("Something").set("Some Value");
};

// Reference HTML section for an object before it was made, and then the database object
const preObject = document.getElementById("object");
const dbRefObject = firebase.database().ref().child("object");

// Show in the console whenever a value changes in the realtime database
dbRefObject.on("value", snap => console.log(snap.val()));

// Display the JSON value of the value in the object
dbRefObject.on("value", snap => preObject.innerText = JSON.stringify(snap.val(), null, 3))