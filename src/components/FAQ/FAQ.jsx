import React from "react";
import "./FAQ.scss";

export const FAQ = () => {
  return (
    <div className="faq">
      <h2 className="faq__title">FAQ</h2>
      <div className="faq__container">
        <div className="faq__sub-container">
          <h3 className="faq__subtitle">Как добраться до музея?</h3>
          <p className="faq__text">
            В Национальный музей Республики Татарстан можно добраться
            общественным транспортом:1 «Станция метро «Кремлевская», а затем по
            направлению к Кремлю пройдя 5 минут пешком;
          </p>
        </div>
        <div className="faq__sub-container">
          <h3 className="faq__subtitle">Есть ли поблизости удобная парковка?</h3>
          <p className="faq__text"></p>
        </div>
        <div className="faq__sub-container">
          <h3 className="faq__subtitle">Можно ли воспользоваться аудиогидом?</h3>
          <p className="faq__text"></p>
        </div>
      </div>
    </div>
  );
};
