import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import "./index.scss";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.jsx";
import { Popup } from "./components/Popup/Popup.jsx";

const Root = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Popup />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/test-500na700/"> */}
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
