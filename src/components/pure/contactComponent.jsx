import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import StatusComponent from "./statusComponent";

const ContactComponent = ({ contact }) => {
  const { name, lastName, email } = contact;

  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Apellido: {lastName}</p>
      <p>Correo: {email}</p>
      <StatusComponent />
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
