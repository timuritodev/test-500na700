import React from "react";
import fb from "../../assets/fb-logo.svg";
import tt from "../../assets/tt-logo.svg";
import yt from "../../assets/yt-logo.svg";
import vk from "../../assets/vk-logo.svg";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__description">
          <h2 className="footer__title">Заголовок</h2>
          <p className="footer__subtitle">
            ОписаниОписание Описание Описание Описание Описание Описаниее
          </p>
          <a className="footer__link" href="500na700.ru">
            500na700.ru
          </a>
        </div>
        <div className="image__container">
          <img className="img" src={vk} alt="" />
          <img className="img" src={fb} alt="" />
          <img className="img" src={tt} alt="" />
          <img className="img" src={yt} alt="" />
        </div>
      </div>
    </footer>
  );
};
