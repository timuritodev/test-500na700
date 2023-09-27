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
    arrows: false,
    autoplay: true,
    centerPadding: "30px",
  };

  return (
    <div className="slick-slider_container">
      <Slider {...settings} className="slick-slider">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Slider>
    </div>
  );
};
