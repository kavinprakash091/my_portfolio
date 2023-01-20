import React from "react";
import "./Contactme.css";
import Line from "../Line/Line";
import Form from "./Form";

export default function Contactme(props) {
  return (
    <div className="contact-me-container" id="contactme">
      <div className="header-container">
        <h1>{props.header}</h1>
        <h5>{props.subheader}</h5>
      </div>
      <Line></Line>
      <div className="contact-me-background-container">
        <div className="left-container">
          <div className="mail-header">
            Get in Touch <i class="fa-solid fa-envelope"></i>
            <div className="social-media-container1">
              <a href="https://www.google.com">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://www.google.com">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.google.com">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.google.com">
                <i class="fa-brands fa-square-github"></i>
              </a>
            </div>
            <div className="mail-text">Send Your Email Here!</div>
            <div className="mail-image-container">
              <img
                src={require("../../assets/Contact Me/mail.jpeg")}
                alt="Mail"
              />
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="mail-container">
            <Form></Form>
          </div>
        </div>
      </div>
      <a href="#home">
        <button className="up-button">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </a>
    </div>
  );
}
