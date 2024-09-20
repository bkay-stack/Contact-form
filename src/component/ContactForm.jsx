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
      <div className="name-values">
        <div className="first">
          <label htmlFor="your name" className="label-styling">
            First Name:
          </label>
          <input type="text" name="" className="input-styling" />
        </div>
        <div className="last">
          <label htmlFor="your name" className="label-styling">
            Last Name:
          </label>
          <input type="text" name="" id="" className="input-styling" />
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
      <div className="radios">
        <div className="radio1">
          {/* <> */}{" "}
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">Huey</label>
          {/* </> */}
        </div>
        <div className="radio1">
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">Huey</label>
        </div>
      </div>
      <div className="msg">
        <label htmlFor="message" className="label-styling">
          Message:
        </label>
        <input type="text" className="input-styling" />
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

      <div className="btn">
        <button type="submit" className="">
          Submit
        </button>
      </div>
      <div>
        <input type="radio" />
        <label>Option text</label>
      </div>
    </form>
    // </div>
  );
};

export default ContactForm;
