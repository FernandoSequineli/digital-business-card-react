import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import picture from "../assets/picture.png";

const Info = () => {
  return (
    <header>
      <img src={picture} alt="Card Picture" />
      <h1>Laura Smith</h1>
      <h4>Frontend Developer</h4>
      <p>laurasmith.website</p>
      <div className="btns">
        <button className="btn btnEmail">
          <FaEnvelope size={14} /> Email
        </button>
        <button className="btn btnLinkedin">
          <FaLinkedin size={14} /> LinkedIn
        </button>
      </div>
    </header>
  );
};

export default Info;
