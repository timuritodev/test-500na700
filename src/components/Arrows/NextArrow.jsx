import React from "react";
import next_arrow from "../../assets/Arrow-next.svg";
import "./Arrows.scss";

export const NextArrow = ({ onClick }) => (
  <div className="arrow-container_next" onClick={onClick}>
    <img src={next_arrow} alt="Next" />
  </div>
);

