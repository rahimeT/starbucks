import React from 'react';
import { Form, Input, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import OperationCarousel from './OperationCarousel';
const RegisterPage = () => {
  return (
    <div className='h-screen'>
      <div className='flex justify-between h-full'>
        <div className='xl:px-20 px-20 w-full flex flex-col h-full justify-center relative'>
          <img
            className='object-contain h-60 w-60 mb-2 center'
            src='https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/297px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423'
            alt='logo'
          />
          <Form layout='vertical' name='basic'>
            <Form.Item
              label='Kullanıcı Adı'
              name={'username'}
              rules={[
                {
                  required: true,
                  message: 'Kullanıcı Adı Alanı Boş Bırakılamaz!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='E-mail'
              name={'email'}
              rules={[
                {
                  required: true,
                  message: 'E-mail Alanı Boş Bırakılamaz!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Şifre'
              name={'password'}
              rules={[
                {
                  required: true,
                  message: 'Şifre Alanı Boş Bırakılamaz!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label='Şifre Tekrar'
              name={'passwordAgain'}
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Şifre Tekrar Alanı Boş Bırakılamaz!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Şifreler eşleşmiyor!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <button type='submit' className='w-full bg-[#00704A] button-56'>
                KAYDOL
              </button>
            </Form.Item>
          </Form>
          <div className='flex justify-center absolute left-0 bottom-10 w-full'>
            Bir hesabınız var mı?&nbsp;
            <Link to='/login' className='text-special'>
              Şimdi giriş yap...
            </Link>
          </div>
        </div>
        <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#00704A] h-full'>
          <div className='w-full h-full flex items-center'>
            <div className='w-full'>
              <Carousel className='!h-full px-6' autoplay>
                <OperationCarousel
                  img='/images/st.avif'
                  title='Güzel Sohbetlere'
                  desc='Geniş Ürün Yelpazesi İle!'
                />
                <OperationCarousel
                  img='/images/st2.avif'
                  title='Sıkı Dostluklara'
                  desc='Dilediğin Vakitte!'
                />
                <OperationCarousel
                  img='/images/st3.avif'
                  title='Yeni Deneyimlere'
                  desc='Dünyanın Her Yerinde!'
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
