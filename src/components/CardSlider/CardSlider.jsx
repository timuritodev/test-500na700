import React from "react";
import "./CardSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../Cards/Card.jsx";

export const CardSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    // focusOnSelect: true,
    arrows: false,
    centerPadding: "60px",
    autoplay: true,
  }

  return (
    <div className="slick-slider_container_card">
      <Slider {...settings} className="slick-slider">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Slider>
    </div>
  );
};
