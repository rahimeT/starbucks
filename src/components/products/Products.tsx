import React from 'react';

const Products = () => {
  return (
    <div className='product-wrapper grid gap-8 grid-cols-[repeat(auto-fill,_360px)] justify-center align-middle '>
      <div className='product-item shadow-lg hover:shadow-2xl select-none transform motion-safe:hover:-translate-y-2 motion-safe:hover:scale-80 transition ease-in-out duration-500  border border-gray-200 bg-white rounded-lg  '>
        <img
          className='p-8 rounded-full object-cover w-full  '
          src='https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?data=eyJpbWFnZUlkIjoiMTYyODBhMGYtMGNkMC00MTYwLWIwZDEtMTRiZDMyNzkzYmU5Iiwid2lkdGgiOjcyMCwiaGVpZ2h0Ijo3MjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0='
          alt='coffe'
        />
        <div className='px-5 pb-5'>
          <h6 className='text-xl font-semibold tracking-tight text-gray-900  text-center pb-4'>
            Krema ile süslenmiş, karamel tatlılığı sunan espresso
          </h6>

          <div className='flex items-center justify-between'>
            <span className='text-3xl font-bold text-gray-900 '>$599</span>
            <a
              href='/'
              className='bg-green-900 hover:bg-white text-white text-l hover:text-green-900 font-bold py-4 px-6 rounded'
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
