import React from "react";
import Line from "../Line/Line";
import "./Resume.css";
import data from "./data.js";
import Education from "./Education";
import Programming from "./Programming";

export default function Resume(props) {
  return (
    <div className="resume-container" id="resume">
      <div className="header-container">
        <h1>{props.header}</h1>
        <h5>{props.subheader}</h5>
      </div>
      <Line></Line>
      <div className="resume-details-container">
        <div className="resume-list-container">
          <ul className="resume-menus">
            <li>
              <i class="fa-solid fa-user-graduate"></i>
            </li>
            <li>
              <i class="fa-solid fa-computer"></i>
            </li>
            <li>
              <i class="fa-solid fa-chart-column"></i>
            </li>
            <li>
              <i class="fa-solid fa-palette"></i>
            </li>
            <li>
              <i class="fa-solid fa-handshake-angle"></i>
            </li>
          </ul>
          <ul className="resume-items">
            <li className="active">Education</li>
            <li>Programming Skills</li>
            <li>Projects</li>
            <li>Interests</li>
            <li>Volunteers</li>
          </ul>
        </div>
        <div className="resume-list-detail-container">
          {/* <Education data={data.education}></Education> */}
          <Programming data={data.programming}></Programming>
        </div>
      </div>
    </div>
  );
}
