import React, { useState } from 'react';
import { Carousel, Checkbox, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import OperationCarousel from './OperationCarousel';

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5005/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      const user = await res.json();
      if (res.status === 200) {
        localStorage.setItem(
          'user',
          JSON.stringify({ username: user.username, email: user.email })
        );
        message.success('Giriş İşlemi Başarılı!');
        form.resetFields();
        navigate('/');
      } else if (res.status === 404) {
        message.error('Böyle bir kullanıcı bulunamadı!');
      } else if (res.status === 403) {
        message.error('Şifre yanlış!');
      }
      setLoading(false);
    } catch (error) {
      message.error('Giriş İşlemi Başarısız!');
      setLoading(false);
    }
  };

  return (
    <div className='h-screen'>
      <div className='flex justify-between h-full'>
        <div className='xl:px-20 px-10 w-full flex flex-col h-full justify-center relative'>
          <img
            className='object-contain h-60 w-60 mb-2 center'
            src='https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/297px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423'
            alt='logo'
          />
          <Form
            layout='vertical'
            name='basic'
            onFinish={onFinish}
            initialValues={{
              remember: false,
            }}
          >
            <Form.Item
              label='E-mail'
              name={'email'}
              rules={[
                {
                  type: 'email',
                  message: 'Geçersiz E-mail!',
                },
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
            <Form.Item name={'remember'} valuePropName='checked'>
              <div className='flex justify-between items-center'>
                <Checkbox>Beni Hatırla</Checkbox>
                {/* <Link>Forgot Password?</Link> */}
              </div>
            </Form.Item>
            <Form.Item>
              <button
                type='submit'
                className='w-full bg-[#00704A] button-56'
                disabled={loading}
              >
                GİRİŞ YAP
              </button>
            </Form.Item>
          </Form>
          <br />
          <div className='flex justify-center absolute left-0 bottom-10 w-full'>
            Henüz bir hesabınız yok mu?&nbsp;
            <Link to='/register' className='text-special'>
              Şimdi kaydol
            </Link>
          </div>
        </div>
        <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#00704A] h-full'>
          <div className='w-full h-full flex items-center'>
            <div className='w-full'>
              <Carousel className='!h-full px-6' autoplay>
                <OperationCarousel
                  img='/images/carousel1.jpg'
                  title='Güzel Sohbetlere'
                  desc='Geniş Ürün Yelpazesi İle!'
                />
                <OperationCarousel
                  img='/images/carousel2.jpg'
                  title='Sıkı Dostluklara'
                  desc='Dilediğin Vakitte!'
                />
                <OperationCarousel
                  img='/images/carousel3.jpeg'
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

export default LoginPage;
