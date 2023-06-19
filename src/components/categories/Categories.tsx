import React from 'react';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import AddCategory from './AddCategory';
import './style.css';
import EditCategory from './EditCategory';

const Categories = ({ categoriesData, setCategoriesData }: any) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  return (
    <>
      <ul className='flex md:flex-col gap-8'>
        {categoriesData &&
          categoriesData.map((item: any) => (
            <li
              className='category-item transition  duration-300 ease-in-out'
              key={item._id}
            >
              <span>{item.title}</span>
            </li>
          ))}
        <hr className='hr-style' />
        <li
          className='category-item !bg-purple-800 hover:opacity-90'
          onClick={() => setIsAddModalOpen(true)}
        >
          <div className='icon add-icon p-5'>
            <PlusOutlined className='md:text-3xl' />
          </div>
        </li>
        <li
          className='category-item !bg-purple-800 hover:opacity-90'
          onClick={() => setIsEditModalOpen(true)}
        >
          <div className='icon edit-icon p-5'>
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
