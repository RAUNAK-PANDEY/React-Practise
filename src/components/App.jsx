import React from "react";
import Heading from "./Heading";
import List from "./List";
import contacts from "../contacts";
import Card from "./Card";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

//Mapping data practise
function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <List />
      <h1 className="headingtop">Contacts</h1>
      {contacts.map(createCard)}
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
