import React from "react";
import "./MainPage.scss";
import { ItemSlider } from "../../components/ItemSlider/ItemSlider.jsx";
import { images } from "../../utils/constants.js";
import { cards } from "../../utils/constants.js";
import { FAQ } from "../../components/FAQ/FAQ.jsx";
import { News } from "../../components/News/News.jsx";

export const MainPage = () => {
  return (
    <section className="main">
      <ItemSlider data={images} />
      <FAQ />
      <News data={cards} />
    </section>
  );
};
