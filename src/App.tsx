import React from 'react';
import './App.css';
import Basket from './components/basket/Basket';
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import Products from './components/products/Products';

const App = () => {
  return (
    <>
      <Header />
      <div className='home gap-8 flex justify-between p-6'>
        <div className='categories  '>
          <Categories />
        </div>
        <div className='products flex-[4]'>
          <Products />
        </div>
        <div className='basket min-w-[240px] max-w-[400px] md:-mr-[24px] border '>
          <Basket />
        </div>
      </div>
    </>
  );
};

export default App;
