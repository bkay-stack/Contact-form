import React, { useState, useEffect } from "react";
import "./contact.styles.css";
import iconSuccess from "../assets/images/icon-success-check.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("contactFormData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          firstName: "",
          lastName: "",
          email: "",
          queryType: "",
          message: "",
          checkBox: false,
        };
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "This field is required";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "This field is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    if (!formData.queryType) {
      validationErrors.queryType = "Please select a query type";
    }

    if (!formData.message) {
      validationErrors.message = "This field is required";
    }

    if (!formData.checkBox) {
      validationErrors.checkBox =
        "To submit this form, please consent to being contacted";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Clear form data from local storage upon successful submission
      localStorage.removeItem("contactFormData");
      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        checkBox: false,
      });
    }
  };

  // Successfull
  useEffect(() => {
    if (isSubmitted) {
      console.log("successful");
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        console.log("successful");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div className="contact-form">
      {isSubmitted && (
        <div className="pop-up" style={{ display: "block" }}>
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
        <h1>Contact form</h1>
        <div className="name-values">
          <div className="first">
            <label htmlFor="firstName" className="label-styling">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`input-styling ${errors.firstName ? "error" : ""}`}
            />

            {errors.firstName && (
              <p className="error-msg">{errors.firstName}</p>
            )}
          </div>
          <div className="first">
            <label htmlFor="lastName" className="label-styling">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`input-styling ${errors.lastName ? "error" : ""}`}
            />
            {errors.lastName && <p className="error-msg">{errors.lastName}</p>}
          </div>
        </div>
        <div className="email">
          <label htmlFor="email" className="label-styling">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-styling ${errors.email ? "error" : ""}`}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>
        <label className="label-styling">Query Type:</label>
        <div className="radios-btn">
          <div className="radio1">
            <label htmlFor="myRadioId1" className="label-radio">
              <input
                className="radio-input"
                id="myRadioId1"
                name="queryType"
                value="General Enquiry"
                type="radio"
                checked={formData.queryType === "General Enquiry"}
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
                checked={formData.queryType === "Support Request"}
                onChange={handleChange}
              />
              <div className="div-radio-wrap"></div>
              Support Request
            </label>
          </div>
        </div>
        {errors.queryType && <p className="error-msg">{errors.queryType}</p>}

        <div className="msg">
          <label htmlFor="message" className="label-styling">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="10"
            className={`input-styling ${errors.message ? "error" : ""}`}
          ></textarea>
        </div>
        {errors.message && <p className="error-msg">{errors.message}</p>}
        <div className="check-box">
          <div className="check">
            <input
              type="checkbox"
              id="custom-checkbox"
              name="checkBox"
              checked={formData.checkBox}
              onChange={handleChange}
              className="input-styling"
            />
          </div>
          <p>I consent to being contacted by the team</p>
        </div>
        {errors.checkBox && <p className="error-msg">{errors.checkBox}</p>}
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
