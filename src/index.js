//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// var React =  require('react');
// var ReactDom = require('react-dom');

//Using ES6
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import Form from "./components/Form";
import Destructure from "./components/Destructure";
import EventHandling from "./components/EventHandling";
//HTML attributes are written in camelCase
ReactDOM.render(<App />, document.getElementById("root"));

//Using JavaScript
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!!";
document.getElementById("root").appendChild(h1);

const name = "Raunak";
const currentDate = new Date();
const year = currentDate.getFullYear();
const currentTime = currentDate.getHours();

let greeting;

/* Use and properties of inline CSS */
const inlineStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  inlineStyle.color = "green";
} else if (currentTime > 12 && currentTime < 18) {
  greeting = "Good Afternoon";
  inlineStyle.color = "blue";
} else {
  greeting = "Good Night";
  inlineStyle.color = "red";
}

//Can use only expressions ex- {Math.floor(Math.random() * 10)} not statements ex- if else

ReactDOM.render(
  <div>
    <h1 className="inline" style={inlineStyle}>
      {" "}
      {greeting}{" "}
    </h1>
    <h2> Hello {name} </h2>
    <p> Lucky number is {Math.floor(Math.random() * 10)} </p>
    <p> Copyright © {year} </p>
  </div>,
  document.getElementById("container")
);

// Use of map , filter , reduce , find and findIndex
//Function

// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

//Use of Arrow functions

// var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map((x) => {
//   return x * 2;
// });

//if there is single return expression then
// const newNumbers = numbers.map(x => x * x);

var isLoggedIn = false;
//conditional Rendering
ReactDOM.render(
  <div className="container">
    {/*Ternary Operator*/}
    <h1 className="headingtop">Login Form</h1>
    {isLoggedIn ? <h1>Hello</h1> : <Login />}
  </div>,
  document.getElementById("card-container")
);

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

//Form changes based on these boolean values
var userIsRegistered = false;
ReactDOM.render(
  <div className="container">
    <h1 className="headingtop">Login And Register Form</h1>
    <Form isRegistered={userIsRegistered} />
  </div>,
  document.getElementById("render-container")
);

ReactDOM.render(<Destructure />, document.getElementById("destructure"));

ReactDOM.render(<EventHandling />, document.getElementById("destructure"));
