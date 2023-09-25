import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import "./index.scss";
import logo from "./assets/logo.svg";

console.log("red");

const Root = () => {
  return (
    <div className="page">
      <Layout />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
