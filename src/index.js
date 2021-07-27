//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// var React =  require('react');
// var ReactDom = require('react-dom');

//Using ES6
import React from "react";
import ReactDOM from "react-dom";

//HTML attributes are written in camelCase
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      TODO List
    </h1>
    <ul>
      <li>Go</li>
      <li>Read</li>
      <li>Eat</li>
      <li>Sleep</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//Using JavaScript
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!!";
document.getElementById("root").appendChild(h1);

const name = "Raunak";
const currentDate = new Date();
const year = currentDate.getFullYear();
//Can use only expressions ex- {Math.floor(Math.random() * 10)} not statements ex- if else
ReactDOM.render(
  <div>
    <h1> Hello {name} </h1>
    <p> Lucky number is {Math.floor(Math.random() * 10)} </p>
    <p> Copyright {year} </p>
  </div>,
  document.getElementById("container")
);
