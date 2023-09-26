import React from "react";
import "./MainPage.scss";
import { ItemSlider } from "../../components/ItemSlider/ItemSlider.jsx";
import { images } from "../../utils/constants.js";
import { FAQ } from "../../components/FAQ/FAQ.jsx";

export const MainPage = () => {
  return (
    <section className="main">
      <ItemSlider data={images} />
      <FAQ />
    </section>
  );
};
