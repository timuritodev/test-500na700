import React, { useEffect, useState } from "react";
import "./News.scss";
import { CardList } from "../Cards/CardList.jsx";
import { CardSlider } from "../CardSlider/CardSlider.jsx";

export const News = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="news">
      <h2 className="news__title">Новости</h2>
      {windowWidth < 1410 ? (
        <CardSlider data={data} />
      ) : (
        <CardList data={data} />
      )}
    </div>
  );
};
