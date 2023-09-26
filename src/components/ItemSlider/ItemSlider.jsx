import React, { useRef } from "react";
import "./ItemSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Item } from "../Item/Item.jsx";
import { PrevArrow } from "../Arrows/PrevArrow.jsx";
import { NextArrow } from "../Arrows/NextArrow.jsx";

export const ItemSlider = ({ data }) => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    // Перемещение к предыдущему слайду
    slickPrev();
  };

  const handleNextClick = () => {
    // Перемещение к следующему слайду
    slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    focusOnSelect: true,
    arrows: true, // Включите стрелки
    prevArrow: <PrevArrow onClick={handlePrevClick} />, // Передайте функцию для стрелки "назад"
    nextArrow: <NextArrow onClick={handleNextClick} />,
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
