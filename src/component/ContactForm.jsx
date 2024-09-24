import React from "react";
import { useState } from "react";
import "./contact.styles.css";
import iconSuccess from "../assets/images/icon-success-check.svg";
const ContactForm = () => {
  const handleSubmit = () => {
    alert("move");
  };

  return (
    <div className="contact-form">
      {/* Pop up */}
      <div className="pop-up">
        <div className="content-wrap">
          <div className="sent">
            <img src={iconSuccess} alt="" />
            <span>Message Sent!</span>
          </div>
          <p> Thanks for completing the form. We'll be in touch soon!</p>
        </div>
      </div>
      <form>
        {/* Header */}
        <h1>Contact form</h1>
        {/* Input fields */}
        <div className="name-values">
          <div className="first">
            <label htmlFor="your name" className="label-styling">
              Last Name:
            </label>
            <input type="text" name="" className="input-styling" />
          </div>
          <div className="first">
            <label htmlFor="your name" className="label-styling">
              Last Name:
            </label>
            <input type="text" name="" className="input-styling" />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email" className="label-styling">
            Email:
          </label>
          <input type="email" name="" id="" className="input-styling" />
        </div>

        <label htmlFor="query" className="label-styling">
          Query Type:
        </label>
        {/* Radio btn */}
        <div className="radios-btn">
          <div className="radio1">
            <label htmlFor="myRadioId1" className="label-radio">
              <input
                className="radio-input"
                id="myRadioId1"
                name="radio"
                type="radio"
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
                name="radio"
                type="radio"
              />
              <div className="div-radio-wrap"></div>
              Support Request
            </label>
          </div>
        </div>
        {/* Msg */}
        <div className="msg">
          <label htmlFor="message" className="label-styling">
            Message:
          </label>
          <textarea
            classNamename="msg"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="check-box">
          <div className="check">
            <input
              type="checkbox"
              id="custom-checkbox"
              className="input-styling"
            />
          </div>
          <p> I consent to being contacted by the team</p>
        </div>

        {/* Sunmit btn */}
        <div className="btn">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
