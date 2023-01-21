import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-bar-container">
      <input type="checkbox" id="isChecked" />
      <label for="isChecked" className="menu-button">
        <i class="fa-solid fa-bars"></i>
      </label>
      <label for="isChecked" className="menu-button1">
        <i class="fa-solid fa-xmark"></i>
      </label>
      <div class="logo">
        PORT<span className="color-text">FOLIO</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#achievements">Projects Demo</a>
        </li>
        <li>
          <a href="#contactme">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}
