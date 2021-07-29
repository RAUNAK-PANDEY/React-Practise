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
