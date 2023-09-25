import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

// import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};