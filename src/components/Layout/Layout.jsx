import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

// import "./Layout.css";

export const Layout = () => {
  return (
    <layout className="layout">
      <Header />
      <Outlet />
      <Footer />
    </layout>
  );
};