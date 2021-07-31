import React, { useState } from "react";

function EventHandling() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div>
      <h1>{headingText}</h1>
      <div className="cards">
        <input type="text" placeholder="What's your name?" />
        <button
          className="eventbutton"
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : null }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EventHandling;
