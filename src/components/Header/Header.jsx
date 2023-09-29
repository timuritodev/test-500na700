import React from "react";
import "./Header.scss";
import pic from "../../assets/logo.svg";
import { PopupButton } from "../PopupButton/PopupButton.jsx";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={"header"}>
      <div className="header__container">
        <Link className="header__logo_link" to="/">
          <img className="header__logo" src={pic} alt={pic} href="/asd" />
        </Link>
        <ul className="header__links-container">
          <li className="header__link">
            Пункт 1
            <ul className="header__sub-menu">
              <div className="header__sub-menu__container">
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 1
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 1
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 1
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 1
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 1
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li className="header__link">
            Пункт 2
            <ul className="header__sub-menu">
              <div className="header__sub-menu__container">
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 2
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 2
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 2
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 2
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 2
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li className="header__link">
            Пункт 3
            <ul className="header__sub-menu">
              <div className="header__sub-menu__container">
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 3
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 3
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 3
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 3
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 3
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li className="header__link">
            Пункт 4
            <ul className="header__sub-menu">
              <div className="header__sub-menu__container">
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 4
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 4
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 4
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 4
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 4
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li className="header__link">
            Пункт 5
            <ul className="header__sub-menu">
              <div className="header__sub-menu__container">
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 5
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 5
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 5
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 5
                  </a>
                </li>
                <li>
                  <a className="header__sub-link" href="#">
                    Подпункт меню 5
                  </a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
        <PopupButton />
      </div>
    </header>
  );
};
