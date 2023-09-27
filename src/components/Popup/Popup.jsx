import React from 'react';
// import { FC, useState, useEffect } from 'react';
import "./Popup.scss";

export const Popup = ({ isPopupOpen, switchPopup }) => {
  return (
    <div className={`popup ${isPopupOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={switchPopup}
        />
      </div>
    </div>
  );
};
