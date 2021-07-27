//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1> TODO List </h1>
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