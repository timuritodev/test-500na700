import React from 'react';
// import { FC, useState, useEffect } from 'react';
import "./Popup.scss";
// import "../popup/popup.scss"

export const Popup = ({ isPopupOpen, switchPopup }) => {
  return (
    <div className={`popup ${isPopupOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
      <ul className="popup__links-container">
          <li className="popup__link">
            Пункт 1
            <ul className="popup__sub-menu">
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 1
                </a>
              </li>
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 1
                </a>
              </li>
            </ul>
          </li>
          <li className="popup__link">
            Пункт 2
            <ul className="popup__sub-menu">
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 2
                </a>
              </li>
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 2
                </a>
              </li>
            </ul>
          </li>
          <li className="popup__link">
            Пункт 3
            <ul className="popup__sub-menu">
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 3
                </a>
              </li>
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 3
                </a>
              </li>
            </ul>
          </li>
          <li className="popup__link">
            Пункт 4
            <ul className="popup__sub-menu">
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 4
                </a>
              </li>
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 4
                </a>
              </li>
            </ul>
          </li>
          <li className="popup__link">
            Пункт 5
            <ul className="popup__sub-menu">
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 5
                </a>
              </li>
              <li>
                <a className="popup__sub-link" href="#">
                  Подпункт меню 5
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <button
          className="popup__close"
          type="button"
          onClick={switchPopup}
        />
      </div>
    </div>
  );
};
