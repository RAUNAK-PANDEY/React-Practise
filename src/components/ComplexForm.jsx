import React, { useState } from "react";

function ComplexForm() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          lname: value,
          fName: prevValue.fName
        };
      }
    });
  }

  return (
    <div>
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <div className="cards">
        <form>
          <input
            className="eventinput"
            name="fName"
            onChange={handleChange}
            placeholder="First Name"
            value={fullName.fName}
          />
          <input
            className="eventinput"
            name="lName"
            onChange={handleChange}
            placeholder="Last Name"
            value={fullName.lName}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ComplexForm;
