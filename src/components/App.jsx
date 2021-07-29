import React from "react";
import Heading from "./Heading";
import List from "./List";
import contacts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <Heading />
      <List />
      <h1 className="headingtop">Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
