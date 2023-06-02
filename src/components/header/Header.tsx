import React from 'react';
import {
  CoffeeOutlined,
  EnvironmentOutlined,
  LogoutOutlined,
  FileDoneOutlined,
  ProfileOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
import { Badge } from 'antd';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='border-b mb-8 '>
      <header className='p-6 flex justify-between items-center gap-10'>
        <div className='header-logo flex items-center gap-6'>
          <div className='header-logo-img'>
            <NavLink to='/'>
              <img
                className='object-contain h-20 w-20 '
                src='https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/297px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423'
                alt='logo'
              />
            </NavLink>
          </div>
          <div className='header-logo-exp'>
            <NavLink to='/'>
              <h2 className='md:text-4xl text-3xl font-bold '>STARBUCKS</h2>
            </NavLink>
          </div>
        </div>
        <div className='header-search flex-1'>
          <Input
            placeholder='search anything else'
            size='large'
            prefix={<CoffeeOutlined className='md:text-xl text-l' />}
            className='rounded-full max-w-[1200] h-14 border-b-2 border-green-600 focus-within:border-green-600'
          />
        </div>
        <div className='header-menu flex justify-between items-center gap-10 md:static fixed z-10 bottom-0 md:w-auto w-screen md:transparent bg-white left-0 md:border-t-0 border-t md:p-0 p-4'>
          <Badge count={5} offset={[0, 0]}>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? '#54399e' : '',
                };
              }}
              to={'/cart'}
              className='menu-link flex flex-col hover:text-[#54399e] transition-all'
            >
              <ShoppingCartOutlined
                className='md:text-4xl text-2xl '
                shape='square'
                size='large'
              />
              <span className='md:text-[18px] text-[12px]'>Basket</span>
            </NavLink>
          </Badge>
          <NavLink
            to={'/'}
            style={({ isActive }) => {
              return {
                color: isActive ? '#40a9ff' : '',
              };
            }}
            className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'
          >
            <FileDoneOutlined className='md:text-3xl text-xl ' />
            <span className='md:text-[18px] text-[12px]'>Bills</span>
          </NavLink>

          <NavLink
            to={'/'}
            style={({ isActive }) => {
              return {
                color: isActive ? '#cce751' : '',
              };
            }}
            className='menu-link flex flex-col hover:text-[#cce751] transition-all'
          >
            <PieChartOutlined className='md:text-3xl text-xl ' />
            <span className='md:text-[18px] text-[12px]'>Statistic</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? '#2fbc49' : '',
              };
            }}
            to={'/'}
            className='menu-link flex flex-col hover:text-[#2fbc49] transition-all'
          >
            <ProfileOutlined className='md:text-3xl text-xl ' />
            <span className='md:text-[18px] text-[12px]'>Customers</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? '#8e4072' : '',
              };
            }}
            to={'/'}
            className='menu-link flex flex-col hover:text-[#8e4072] transition-all'
          >
            <EnvironmentOutlined className='md:text-3xl text-xl ' />
            <span className='md:text-[18px] text-[12px]'>Our Stores</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? '#d83232' : '',
              };
            }}
            to={'/'}
            className='menu-link flex flex-col hover:text-[#d83232] transition-all'
          >
            <LogoutOutlined className='md:text-3xl text-xl' />
            <span className='md:text-[18px] text-[12px]'>Log Out</span>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
