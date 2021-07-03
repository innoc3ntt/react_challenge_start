import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ addContact, contacts }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (duplicate) alert("Contact already exists");

    addContact(name, phone, email);
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    for (let entry of contacts) {
      if (entry.name === name) {
        setDuplicate(true);
        return;
      }
      setDuplicate(false);
    }
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          contacts={contacts}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};

ContactsPage.propType = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
