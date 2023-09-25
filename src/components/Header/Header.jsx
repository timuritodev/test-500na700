import React from "react";
import "./Header.scss";
import pic from "../../assets/logo.svg"


export const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={pic} alt={pic} />
      <ul className="header__container">
        <li className="header__link">Пункт 1</li>
        <li className="header__link">Пункт 2</li>
        <li className="header__link">Пункт 3</li>
        <li className="header__link">Пункт 4</li>
        <li className="header__link">Пункт 5</li>
      </ul>
    </header>
  );
};
