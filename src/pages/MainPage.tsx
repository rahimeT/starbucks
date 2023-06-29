import React, { useEffect, useState } from 'react';
import Basket from '../components/basket/Basket';
import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import Products from '../components/products/Products';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const [categoriesData, setCategoriesData] = useState<any[]>([]);
  const [productsData, setProductsData] = useState<any[]>([]);
  // @ts-ignore
  const basket = useSelector((state) => state.basket);

  const getAllCategories = async () => {
    try {
      const res = await fetch(
        'http://localhost:5005/api/categories/get-all-categories'
      );
      const data = await res.json();
      data &&
        setCategoriesData(
          data.map((item: any) => {
            // antd select menüsünde value'ya göre seçtirdiği için title'i özel bir değere atadık
            return { ...item, value: item.title };
          })
        );
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    try {
      const res = await fetch(
        'http://localhost:5005/api/products/get-all-products'
      );
      const data = await res.json();
      setProductsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
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
        <div className='products flex-[4] max-h-[calc(100vh_-_160px)] overflow-y-auto pb-4'>
          {productsData && categoriesData && (
            <Products
              categoriesData={categoriesData}
              productsData={productsData}
              setProductsData={setProductsData}
            />
          )}
        </div>
        {basket.basketItems.length > 0 && (
          <div className='basket min-w-[200px] max-w-[400px] border '>
            <Basket />
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
