import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-line-container"> </div>{' '}
      <div className="footer-detail-container">
        <div className="footer-name-container"> KAVIN </div>{' '}
        <ul className="footer-nav-container">
          <li>
            <a href="#home">
              <button className="nav-link"> Home </button>{' '}
            </a>{' '}
          </li>{' '}
          <li>
            <a href="#aboutme">
              <button className="nav-link"> About me </button>{' '}
            </a>{' '}
          </li>{' '}
          <li>
            <a href="#resume">
              <button className="nav-link"> Resume </button>{' '}
            </a>{' '}
          </li>{' '}
          <li>
            <a href="#achievements">
              <button className="nav-link"> Project Demo </button>{' '}
            </a>{' '}
          </li>{' '}
          <li>
            <a href="#contactme">
              <button className="nav-link"> Contact me </button>{' '}
            </a>{' '}
          </li>{' '}
        </ul>{' '}
        <div className="social-media-container2">
          <a href="https://www.facebook.com/profile.php?id=100089756736695">
            <i className="fa-brands fa-square-facebook"> </i>
          </a>{' '}
          <a href="https://instagram.com/__en__field__love__r?igshid=ZDdkNTZiNTM=">
            <i className="fa-brands fa-instagram"> </i>
          </a>{' '}
          <a href="https://www.linkedin.com/in/kavin-prakash-785766219/">
            <i className="fa-brands fa-linkedin"> </i>
          </a>{' '}
          <a href="https://github.com/kavinprakash091">
            <i className="fa-brands fa-square-github"> </i>
          </a>{' '}
        </div>{' '}
        <div className="footer-mail-container">
          <i className="fa-solid fa-envelope"> </i>{' '}
          <span> kavinprakashofficial @gmail.com </span>{' '}
        </div>{' '}
        <div className="footer-phone-container">
          <i className="fa-solid fa-phone"> </i> <span> +91 63698 38362</span>
        </div>{' '}
        <div className="footer-copyright-container">
          <i className="fa-regular fa-copyright"> </i>{' '}
          <span> Kavin, All rights reserved. </span>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
