import React, { useState } from "react";
import "./contact.styles.css";
import iconSuccess from "../assets/images/icon-success-check.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    checkBox: false,
  });

  // Errors Handling
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for pop-up visibility

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validation checks
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "  This field is required";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "  This field is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = " This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "  Please enter a valid email address";
    }

    if (!formData.queryType) {
      validationErrors.queryType = "Please select a query type";
    }

    if (!formData.message) {
      validationErrors.message = "This field is required";
    }

    if (!formData.checkBox) {
      validationErrors.checkBox = "Please consent to being contacted";
    }

    // If no validation errors, show the pop-up
    // if (Object.keys(validationErrors).length === 0) {
    //   setIsSubmitted(true);
    // }

    setErrors(validationErrors);
  };

  return (
    <div className="contact-form">
      {/* Conditionally render pop-up */}
      {isSubmitted && (
        <div className="pop-up">
          <div className="content-wrap">
            <div className="sent">
              <img src={iconSuccess} alt="Success Icon" />
              <span>Message Sent!</span>
            </div>
            <p>Thanks for completing the form. We'll be in touch soon!</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Header */}
        <h1>Contact form</h1>
        {/* Input fields */}
        <div className="name-values ">
          <div className="first">
            <label htmlFor="firstName" className="label-styling">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              className="input-styling"
            />
            {errors.firstName && (
              <p className="error-msg">{errors.firstName}</p>
            )}
            {/* Updated */}
          </div>
          <div className="first">
            <label htmlFor="lastName" className="label-styling">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              className="input-styling"
            />
            {errors.lastName && <p className="error-msg">{errors.lastName}</p>}
            {/* Updated */}
          </div>
        </div>
        <div className="email">
          <label htmlFor="email" className="label-styling">
            Email:
          </label>
          <input
            type="email"
            className="input-styling"
            name="email"
            onChange={handleChange}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
          {/* Updated */}
        </div>
        <label htmlFor="query" className="label-styling">
          Query Type:
        </label>
        {/* Radio buttons */}
        <div className="radios-btn">
          <div className="radio1">
            <label htmlFor="myRadioId1" className="label-radio">
              <input
                className="radio-input"
                id="myRadioId1"
                name="queryType"
                value="General Enquiry"
                type="radio"
                onChange={handleChange}
              />
              <div className="div-radio-wrap"></div>
              General Enquiry
            </label>
          </div>
          <div className="radio1">
            <label htmlFor="myRadioId2" className="label-radio">
              <input
                className="radio-input"
                id="myRadioId2"
                name="queryType"
                value="Support Request"
                type="radio"
                onChange={handleChange}
              />
              <div className="div-radio-wrap"></div>
              Support Request
            </label>
          </div>
        </div>
        {errors.queryType && <p className="error-msg">{errors.queryType}</p>}
        {/* Updated */}
        {/* Message */}
        <div className="msg">
          <label htmlFor="message" className="label-styling">
            Message:
          </label>
          <textarea
            name="message"
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        {errors.message && <p className="error-msg">{errors.message}</p>}
        {/* Checkbox */}
        <div className="check-box">
          <div className="check">
            <input
              type="checkbox"
              id="custom-checkbox"
              name="checkBox"
              className="input-styling"
              onChange={handleChange}
            />
          </div>
          <p> I consent to being contacted by the team</p>
          {/* Updated */}
        </div>
        {errors.checkBox && <p className="error-msg">{errors.checkBox}</p>}
        {/* Submit button */}
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
