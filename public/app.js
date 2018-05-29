// 'use strict';
// const admin = require("firebase-admin");
// const serviceAccount = require('./ServiceAccountKey.json')
// const firebase = require("firebase");

// Initialize Firebase
var config = {
	apiKey: "AIzaSyALieS9ec6_ismgAR5NJhkNt8tznyyUJEk",
	authDomain: "test-nodejs-202205.firebaseapp.com",
	databaseURL: "https://test-nodejs-202205.firebaseio.com",
	projectId: "test-nodejs-202205",
	storageBucket: "test-nodejs-202205.appspot.com",
	messagingSenderId: "472396530727"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

const docRef = firestore.doc("samples/sandwichData");
const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#latestHotDogStatus");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
	const textToSave = inputTextField.value;
	console.log("I am going to save " + textToSave + " to Firestore");
	docRef.set({
		hotDogStatus: textToSave
	}).then(function(){
		console.log("Status saved!");
	}).catch(function (error) {
		console.log("Got an error: ", error);
	});
})