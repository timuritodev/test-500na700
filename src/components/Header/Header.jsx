import React, { useEffect, useState } from "react";
import "./Header.scss";
import pic from "../../assets/logo.svg";

export const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setNavOpen = () => {
    setIsOpen(true);
  };

  const setNavClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderFixed ? "fixed" : ""}`}>
      <nav
        className={`header__content ${isOpen && "header__content_open"}`}
        onMouseOver={setNavOpen}
        onMouseOut={setNavClose}
      >
        <ul className="header__list" onMouseOver={setNavOpen}>
          <p className="">gbhs</p>
        </ul>
      </nav>
      <div className="header__container">
        <img className="header__logo" src={pic} alt={pic} />
        <ul className="header__links-container">
          <li className="header__link" onMouseOver={setNavOpen}>
            Пункт 1
          </li>
          <li className="header__link">Пункт 2</li>
          <li className="header__link">Пункт 3</li>
          <li className="header__link">Пункт 4</li>
          <li className="header__link">Пункт 5</li>
        </ul>
      </div>
    </header>
  );
};
