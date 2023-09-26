import React from "react";
import { Item } from "../../components/Item/Item.jsx";
import "./MainPage.scss";
import { ItemSlider } from "../../components/ItemSlider/ItemSlider.jsx";
import { images } from "../../utils/constants.js";

export const MainPage = () => {
  return (
    <section className="main">
      {/* <Item data={images}/> */}
      <ItemSlider data={images} />
    </section>
  );
};
