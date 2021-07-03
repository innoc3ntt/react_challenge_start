import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  //function adds a new object to the contacts state
  const addContact = (name, phoneNumber, email) => {
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };
    setContacts((prev) => {
      return [newContact, ...prev];
    });
  };

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments((prev) => {
      return [newAppointment, ...prev];
    });
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage addContact={addContact} contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              addAppointment={addAppointment}
              contacts={contacts}
              appointments={appointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
