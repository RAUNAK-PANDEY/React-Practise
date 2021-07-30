import React from "react";
import Heading from "./Heading";
import List from "./List";
import contacts from "../contacts";
import Card from "./Card";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <Heading />
      <List />
      <h1 className="headingtop">Contacts</h1>
      {
        //Mapping data practise
        contacts.map((contact) => (
          <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
          />
        ))
      }
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
