import React from 'react';
import { Button } from 'antd';
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
const Basket = () => {
  return (
    <div className='cart flex h-full max-h-[calc(100vh_-_190px)] flex-col justify-center align-middle'>
      <h2 className='bg-white shadow-md text-black text-center font-bold tracking-wide p-6 underline underline-offset-6 text-3xl'>
        Basket
      </h2>
      <ul className='cart-items p-2 flex flex-col gap-y-6 overflow-y-auto'>
        <li className='cart-item'>
          <div className='flex justify-center'>
            <div className='flex flex-col rounded-lg  shadow-lg dark:bg-green-900 md:max-w-xl md:flex-row'>
              <img
                className='h-64 w-full rounded-t-lg object-cover md:h-auto md:w-32 md:rounded-none md:rounded-l-lg'
                src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg'
                alt=''
              />
              <div className='flex flex-col justify-start p-6 gap-8'>
                <h5 className=' text-2xl font-medium text-neutral-800 dark:text-neutral-50 '>
                  Card title
                </h5>
                <p className='mb-6 text-base text-neutral-600 dark:text-neutral-400 italic break-all'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className='flex flex-row gap-x-4 items-center justify-between'>
                  <div className='flex flex-row gap-x-4 justify-start items-center'>
                    <div className='text-2xl cursor-pointer dark:text-white'>
                      <MinusOutlined />
                    </div>
                    <div>
                      <span className='text-xl text-neutral-500 dark:text-white'>
                        9
                      </span>
                    </div>
                    <div className='text-2xl cursor-pointer dark:text-white'>
                      <PlusOutlined />
                    </div>
                  </div>
                  <div className='flex flex-row gap-x-2 text-xl justify-start items-center dark:text-white'>
                    <div>
                      <span>X</span>
                    </div>
                    <div>
                      <span>599</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className='cart-totals mt-auto'>
        <div className='border-t border-b'>
          <div className='flex justify-between p-4'>
            <b className='text-xl'>genel toplam</b>
            <span className='text-xl'>320tl</span>
          </div>
          <div className='p-4 flex flex-col gap-4'>
            <div>
              <Button
                icon={<ShoppingOutlined />}
                size='large'
                className=' flex items-center justify-center w-full hover:bg-white  text-white font-semibold hover:text-green-900 py-2 px-4 rounded bg-green-900'
              >
                Siparis Ver!
              </Button>
            </div>
            <div>
              <Button
                icon={<DeleteOutlined />}
                size='large'
                className='
                 flex items-center justify-center w-full bg-red-900 hover:bg-white  text-white font-semibold hover:text-red-900 py-2 px-4 rounded'
              >
                Siparisi temizle!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
