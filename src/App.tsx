import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasketPage from './pages/BasketPage';
import BillPage from './pages/BillPage';
import StatisticPage from './pages/StatisticPage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import ProductsSettings from './pages/ProductsSettings';
import jwt_decode from 'jwt-decode';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cart' element={<BasketPage />} />
          <Route path='/bills' element={<BillPage />} />
          <Route path='/statistic' element={<StatisticPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/products' element={<ProductsSettings />} />
          <Route path='*' element={<p>Not Found</p>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
