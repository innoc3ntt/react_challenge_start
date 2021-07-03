import React from "react";
import PropTypes from "prop-types";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleName}
      />
      <input
        type="tel"
        placeholder="Mobile +61"
        value={phone}
        onChange={handlePhone}
        pattern="\\+d{11}"
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmail}
      />
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

ContactForm.propType = {
  handleSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.string.isRequired,
};
