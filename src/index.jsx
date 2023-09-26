import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout/Layout.jsx";
import './index.scss'
import { MainPage } from './pages/MainPage/MainPage.jsx';

const Root = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);