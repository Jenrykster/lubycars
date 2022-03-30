import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Header } from '@components';
import { CarDetail, MainPage } from '@pages';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/car/:id' element={<CarDetail />} />
        <Route path='/*' element={<h1>404 Not found</h1>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
