import React from "react";

function ToDoItemLi(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li className="todoli">{props.text}</li>
    </div>
  );
}
export default ToDoItemLi;
