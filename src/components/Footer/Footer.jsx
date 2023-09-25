import React from 'react';
import pic from "../../assets/logo.svg"
// import "./Header.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <img className="header__logo" src={pic} alt={pic} />
      <h2>пика</h2>
    </footer>
  );
};
