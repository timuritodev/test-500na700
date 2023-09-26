import React from "react";
import "./Cards.scss";

export const Card = ({ data }) => {
  return (
    <div className="card">
      <img className="card__image" src={data.image} alt="фото" />
      <h2 className="card__title">{data.title}</h2>
      <p className="card__subtitle">{data.subtitle}</p>
    </div>
  );
};
