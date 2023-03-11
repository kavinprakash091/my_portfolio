import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav-bar-container">
      <input type="checkbox" id="isChecked" />
      <label for="isChecked" className="menu-button">
        <i class="fa-solid fa-bars"> </i>{' '}
      </label>{' '}
      <label for="isChecked" className="menu-button1">
        <i class="fa-solid fa-xmark"> </i>{' '}
      </label>{' '}
      <div class="logo">
        <span className={{ '--i': '1' }}>K</span>
        <span className={{ '--i': '2' }}>A</span>
        <span className={{ '--i': '3' }}>V</span>
        <span className={{ '--i': '4' }}>I</span>
        <span className={{ '--i': '5' }}>N</span>
        <span className={{ '--i': '6' }}>&nbsp;</span>
        <span className={{ '--i': '7' }}>
          <div className="color-text"> P </div>
        </span>
      </div>{' '}
      <ul className="nav-links">
        <li>
          <a href="#home"> Home </a>{' '}
        </li>{' '}
        <li>
          <a href="#aboutme"> About Me </a>{' '}
        </li>{' '}
        <li>
          <a href="#resume"> Resume </a>{' '}
        </li>{' '}
        <li>
          <a href="#achievements"> Projects Demo </a>{' '}
        </li>{' '}
        <li>
          <a href="#contactme"> Contact Me </a>{' '}
        </li>{' '}
      </ul>{' '}
    </div>
  );
}
