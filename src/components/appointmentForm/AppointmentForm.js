import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import PropTypes from "prop-types";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = (e) => {
    setContact(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        placeholder="Title"
        onChange={handleTitle}
      />
      <input
        value={date}
        type="date"
        min={getTodayString()}
        onChange={handleDate}
      />
      <input value={time} type="time" onChange={handleTime} />
      <ContactPicker contacts={contacts} handleChange={handleChange} />
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

AppointmentForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  contact: PropTypes.string.isRequired,
  setContact: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
