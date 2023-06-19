import React from 'react';
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasketPage from './pages/BasketPage';
import CustomerPage from './pages/CustomerPage';
import BillPage from './pages/BillPage';
import StatisticPage from './pages/StatisticPage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cart' element={<BasketPage />} />
          <Route path='/customer' element={<CustomerPage />} />
          <Route path='/bills' element={<BillPage />} />
          <Route path='/statistic' element={<StatisticPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
