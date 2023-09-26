import React from "react";
import "./ItemSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Item } from "../Item/Item.jsx";

export const ItemSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className="slick-slider_container">
      <Slider {...settings} className="slick-slider">
        {data.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </Slider>
    </div>
  );
};
