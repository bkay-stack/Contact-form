import React from "react";
import "./contact.styles.css";
import iconImg from "../assets/images/icon-radio-selected.svg";
import iconCheck from "../assets/images/icon-checkbox-check.svg";
import iconSuccess from "../assets/images/icon-success-check.svg";
const ContactForm = () => {
  return (
    // <div className="contact-form">

    <form>
      <h1>Contact form</h1>
      {/* <div className="name-values"> */}
      {/* <div className="first"> */}
      <label htmlFor="your name">First Name:</label>
      <input type="text" name="" id="" />
      {/* </div> */}
      {/* <div className="last"> */}
      <label htmlFor="your name">Last Name:</label>
      <input type="text" name="" id="" />
      {/* </div> */}
      {/* </div> */}
      <div className="email">
        <label htmlFor="email">Email:</label>
        <input type="email" name="" id="" />
      </div>
    </form>
    // </div>
  );
};

export default ContactForm;
