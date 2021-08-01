import React, { useState } from "react";

function TodoList() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="todocontainer">
      <div className="todoheading">
        <h1>To-Do List</h1>
      </div>
      <div className="todoform">
        <input
          className="todoinput"
          onChange={handleChange}
          type="text"
          value={inputText}
        />
        <button className="todobutton" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li className="todoli">{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
