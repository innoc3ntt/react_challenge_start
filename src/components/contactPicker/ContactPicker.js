import React from "react";
import PropTypes from "prop-types";

export const ContactPicker = ({ contacts, handleChange }) => {
  return (
    <select onChange={handleChange}>
      <option>None</option>
      {contacts.map((contact) => {
        return <option>{contact.name}</option>;
      })}
    </select>
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};
