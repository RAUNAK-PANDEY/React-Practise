import React, { useState } from "react";
import ToDoItemLi from "./ToDoItemLi";
import InputArea from "./InputArea";
function TodoList() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  //CHALLENGE: I have extracted the Input Area, including the <input> and
  //<button> elements into a seperate Component called InputArea.
  //Your job is to make the app work as it did before but this time with the
  //InputArea as a seperate Component.

  // DO NOT: Modify the ToDoItem.jsx
  // DO NOT: Move the input/button elements back into the App.jsx

  //Hint 1: You will need to think about how to manage the state of the input element
  //in InputArea.jsx.
  //Hint 2: You will need to think about how to pass the input value back into
  //the addItem() function in App.jsx.

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="todocontainer">
      <div className="todoheading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItemLi
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
