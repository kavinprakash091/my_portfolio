import React from "react";
import "./Achievements.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Line from "../Line/Line";

export default function Achievements(props) {
  return (
    <div className="achievements-container" id="achievements">
      <div className="header-container">
        <h1>{props.header}</h1>
        <h5>{props.subheader}</h5>
      </div>
      <Line></Line>
      <div className="carousel-container">
        <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
          <div className="img-container">
            <img
              src={require("../../assets/Achievements/Fruit_crash.png")}
              alt="Fruit Crash"
            />
            <div className="legend containers">
              <a href="https://kavinprakash091.github.io/fruits_crash/">
                <button className="live-demo-button">Live Demo</button>{" "}
              </a>
              <a href="https://github.com/kavinprakash091/fruits_crash">
                <button className="github-button">Github</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img
              src={require("../../assets/Achievements/Drawing_app.png")}
              alt="Drawing App"
            />
            <div className="legend containers">
              <a href="https://kavinprakash091.github.io/drawing_website/">
                <button className="live-demo-button">Live Demo</button>{" "}
              </a>
              <a href="https://github.com/kavinprakash091/drawing_website">
                <button className="github-button">Github</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img
              src={require("../../assets/Achievements/my_kec.png")}
              alt="my_kec"
            />
            <div className="legend containers">
              <a href="https://mykec.kongu.edu">
                <button className="live-demo-button">Live Demo</button>{" "}
              </a>
              <a href="https://github.com/kavinprakash091/my_kec">
                <button className="github-button">Github</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img
              src={require("../../assets/Achievements/Amazona.png")}
              alt="Amazona"
            />
            <div className="legend containers">
              <a href="https://kavinprakash091.github.io/fruits_crash/">
                <button className="live-demo-button">Live Demo</button>{" "}
              </a>
              <a href="https://github.com/kavinprakash091/amazona">
                <button className="github-button">Github</button>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
