import React from 'react';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import AddCategory from './AddCategory';
import './style.css';
import EditCategory from './EditCategory';

const Categories = ({
  categoriesData,
  setCategoriesData,
  setFiltered,
  productsData,
}: any) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState(null);
  useEffect(() => {
    if (!categoryTitle) {
      setFiltered(productsData);
    } else {
      setFiltered(
        productsData.filter((item: any) => item.category === categoryTitle)
      );
    }
  }, [productsData, setFiltered, categoryTitle]);
  return (
    <>
      <ul className='flex md:flex-col gap-8'>
        {categoriesData &&
          categoriesData.map((item: any) => (
            <li
              onClick={() => setCategoryTitle(item.title)}
              className={`category-item transition duration-300 ease-in-out ${
                item.title === categoryTitle && 'bg-green-900	 text-white'
              }`}
              key={item._id}
            >
              <span>{item.title}</span>
            </li>
          ))}
        <hr className='hr-style' />
        <li
          className='category-item hover:opacity-90'
          onClick={() => setIsAddModalOpen(true)}
        >
          <div className='icon add-icon'>
            <PlusOutlined className='md:text-3xl' />
          </div>
        </li>
        <li
          className='category-item hover:opacity-90'
          onClick={() => setIsEditModalOpen(true)}
        >
          <div className='icon edit-icon'>
            <EditOutlined className='md:text-3xl' />
          </div>
        </li>
        <AddCategory
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          categoriesData={categoriesData}
          setCategoriesData={setCategoriesData}
        />
        <EditCategory
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          categoriesData={categoriesData}
          setCategoriesData={setCategoriesData}
        />
      </ul>
    </>
  );
};

export default Categories;
