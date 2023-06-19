import React, { useEffect, useState } from 'react';
import Basket from '../components/basket/Basket';
import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import Products from '../components/products/Products';

const MainPage = () => {
  const [categoriesData, setCategoriesData] = useState<any[]>([]);

  const getAllCategories = async () => {
    try {
      const res = await fetch(
        'http://localhost:5005/api/categories/get-all-categories'
      );
      const data = await res.json();
      setCategoriesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <Header />
      <div className='home gap-8 flex justify-between p-6 md:flex-row flex-col  md:pb-0 pb-24'>
        <div className='categories overflow-auto md:pb-10 max-h-[calc(100vh_-_160px)] '>
          {categoriesData && (
            <Categories
              categoriesData={categoriesData}
              setCategoriesData={setCategoriesData}
            />
          )}
        </div>
        <div className='products flex-[4]  max-h-[calc(100vh_-_160px)] overflow-y-auto pb-10'>
          <Products />
        </div>
        <div className='basket min-w-[200px] max-w-[400px]  border '>
          <Basket />
        </div>
      </div>
    </>
  );
};

export default MainPage;
