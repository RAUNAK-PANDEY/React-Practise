import React, { useState } from "react";

function EventHandling() {
  const [headingText, setHeadingText] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);
    //To stop the default behaviour of forms
    //  which refreshes the pages after submitting.
    event.preventDefault();
  }

  return (
    <div>
      <h1>Hello {headingText}</h1>
      <div className="cards">
        <form onSubmit={handleClick}>
          <input
            className="eventinput"
            onChange={handleChange}
            type="text"
            placeholder="What's your name?"
            value={name}
          />
          <button
            className="eventbutton"
            type="submit"
            style={{ backgroundColor: isMousedOver ? "black" : null }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventHandling;
