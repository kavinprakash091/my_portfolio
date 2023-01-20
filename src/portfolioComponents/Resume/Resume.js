import React, { useState } from "react";
import Line from "../Line/Line";
import "./Resume.css";
import data from "./data.js";
import Education from "./Education";
import Programming from "./Programming";
import Project from "./Project";
import Interest from "./Interest";
import Volunteer from "./Volunteer";

export default function Resume(props) {
  const [category, setCategory] = useState("1");
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
            <li
              onClick={() => {
                setCategory("1");
              }}
            >
              <i class="fa-solid fa-user-graduate"></i>
            </li>
            <li
              onClick={() => {
                setCategory("2");
              }}
            >
              <i class="fa-solid fa-computer"></i>
            </li>
            <li
              onClick={() => {
                setCategory("3");
              }}
            >
              <i class="fa-solid fa-chart-column"></i>
            </li>
            <li
              onClick={() => {
                setCategory("4");
              }}
            >
              <i class="fa-solid fa-palette"></i>
            </li>
            <li
              onClick={() => {
                setCategory("5");
              }}
            >
              <i class="fa-solid fa-handshake-angle"></i>
            </li>
          </ul>
          <ul className="resume-items">
            <li
              className={category === "1" ? "active" : ""}
              onClick={() => {
                setCategory("1");
              }}
            >
              Education
            </li>
            <li
              className={category === "2" ? "active" : ""}
              onClick={() => {
                setCategory("2");
              }}
            >
              Programming Skills
            </li>
            <li
              className={category === "3" ? "active" : ""}
              onClick={() => {
                setCategory("3");
              }}
            >
              Projects
            </li>
            <li
              className={category === "4" ? "active" : ""}
              onClick={() => {
                setCategory("4");
              }}
            >
              Interests
            </li>
            <li
              className={category === "5" ? "active" : ""}
              onClick={() => {
                setCategory("5");
              }}
            >
              Volunteers
            </li>
          </ul>
        </div>
        <div className="resume-list-detail-container">
          {category === "1" ? (
            <Education data={data.education}></Education>
          ) : category === "2" ? (
            <Programming data={data.programming}></Programming>
          ) : category === "3" ? (
            <Project data={data.projects}></Project>
          ) : category === "4" ? (
            <Interest data={data.interests}></Interest>
          ) : (
            <Volunteer data={data.volunteer}></Volunteer>
          )}
        </div>
      </div>
    </div>
  );
}
