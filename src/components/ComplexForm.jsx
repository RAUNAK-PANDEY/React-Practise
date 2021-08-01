import React, { useState } from "react";

function ComplexForm() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <div className="cards">
        <form>
          <input
            className="eventinput"
            onChange={handleChange}
            value={contact.fName}
            name="fName"
            placeholder="First Name"
          />
          <input
            className="eventinput"
            onChange={handleChange}
            value={contact.lName}
            name="lName"
            placeholder="Last Name"
          />
          <input
            className="eventinput"
            onChange={handleChange}
            value={contact.email}
            name="email"
            placeholder="Email"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ComplexForm;
