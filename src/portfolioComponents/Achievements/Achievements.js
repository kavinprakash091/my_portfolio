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
        <Carousel
          infiniteLoop
          autoPlay
          useKeyboardArrows
          centerMode
          dynamicHeight
        >
          <div className="img-container">
            <img
              src="https://via.placeholder.com/200/0000FF/808080"
              alt="Image 1"
            />
            <p id="legend">Slider don't lie</p>
          </div>
          <div className="img-container">
            <img
              src="https://via.placeholder.com/200/FF0101/808080"
              alt="Image 2"
            />
            <p>Slider don't lie</p>
          </div>
          <div className="img-container">
            <img
              src="https://via.placeholder.com/200/FEFF00/808080"
              alt="Image 3"
            />
            <p>Slider don't lie</p>
          </div>
          <div className="img-container">
            <img
              src="https://via.placeholder.com/200/000000/808080"
              alt="Image 4"
            />
            <div className="img-description-container">Hello</div>
            <p>Slider don't lie</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
