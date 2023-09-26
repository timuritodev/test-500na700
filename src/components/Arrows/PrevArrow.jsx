import React from "react";
import prev_arrow from "../../assets/Arrow-back.svg";
import "./Arrows.scss";

export const PrevArrow = ({ onClick }) => (
  <div className="arrow-container prev" onClick={onClick}>
    <img src={prev_arrow} alt="Previous" />
  </div>
);
