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
      <div className="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
          <div className="img-container">
            <img
              src="https://tse3.explicit.bing.net/th?id=OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK&pid=Api&P=0"
              alt="Kavin"
            />
          </div>
          <div className="img-container">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.HM664gtdbHVkOXvWG4X3LAHaE7&pid=Api&P=0"
              alt="Kavin"
            />
          </div>
          <div className="img-container">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.Ru8PL0KYLo9XnIn2NWqUvAHaEA&pid=Api&P=0"
              alt="Kavin"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
