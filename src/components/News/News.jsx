import React from "react";
import "./News.scss";
import { CardList } from "../Cards/CardList.jsx";

export const News = ({ data }) => {
  return (
    <div className="news">
      <h2 className="news__title">Новости</h2>
      <CardList data={data} />
    </div>
  );
};
