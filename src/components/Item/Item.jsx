import React from "react";
import "./Item.scss";

export const Item = ({ data }) => {
  return (
    <div className="item">
      <img className="item__img" src={data.image} alt="as" />
      <h2 className="item__title">{data.title}</h2>
    </div>
  );
};
