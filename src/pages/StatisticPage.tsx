import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import StatisticComp from '../components/statistic/StatisticComp';
import { Pie } from '@ant-design/plots';
const StatisticPage = () => {
  const [data, setData] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await fetch('http://localhost:5005/api/bills/get-all');
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log('data', data);

  useEffect(() => {
    getAllProducts();
  }, []);

  const pieConfig = {
    appendPadding: 10,
    data,
    angleField: 'subTotal',
    colorField: 'customerName',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}₺',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Satış Çevresi',
      },
    },
  };

  const calculateTotalAmount = (data: any[]) => {
    const amount = data.reduce((total, item) => item?.totalAmount + total, 0);
    return `${amount.toFixed(2)}₺`;
  };

  const calculateTotalCustomer = (data: any[]) => {
    let newCustomerNameArr: any[] = []; // Farklı isimleri saklamak için boş bir dizi

    for (let i = 0; i < data.length; i++) {
      let obje = data[i];

      const existCustomerName = newCustomerNameArr.find(
        (item) => item?.customerName === obje.customerName
      );
      if (!existCustomerName) {
        newCustomerNameArr.push(obje);
      }
    }

    return newCustomerNameArr.length;
  };

  const calculateTotalSaleProduct = (data: any[]) => {
    const totalProduct = data.reduce((total, items) => {
      let mapTotal = 0;
      for (let index = 0; index < items?.cartItems.length; index++) {
        const item = items?.cartItems[index];
        mapTotal += item.quantity;
      }
      return mapTotal + total;
    }, 0);
    return totalProduct;
  };

  return (
    <>
      <Header />
      <div className='px-6 md:pb-0 pb-20'>
        <h1 className='text-4xl font-bold text-center mb-4'>İstatistiklerim</h1>
        <div className='statistic-section'>
          <h2 className='text-lg'>
            Hoş geldin{' '}
            <span className='text-green-800 font-bold text-xl'>admin</span>.
          </h2>
          {data && (
            <div className='statistic-cards grid xl:grid-cols-4 md:grid-cols-2 mt-10 md:gap-10 gap-4'>
              <StatisticComp
                title={'Toplam Tekil Müşteri'}
                amount={calculateTotalCustomer(data)}
                img={'images/user.png'}
              />
              <StatisticComp
                title={'Toplam Kazanç'}
                amount={calculateTotalAmount(data)}
                img={'images/money.png'}
              />
              <StatisticComp
                title={'Toplam Kesilen Fatura'}
                amount={data.length}
                img={'images/sale.png'}
              />
              <StatisticComp
                title={'Toplam Satılan Ürün'}
                amount={calculateTotalSaleProduct(data)}
                img={'images/product.png'}
              />
            </div>
          )}
          <div className='gap-10 lg:flex-row flex-col items-center mt-20'>
            <div
              className='lg:h-full h-72 flex text-center justify-center align-center p-10 '
              style={{ background: '#F5F5F5', borderRadius: '5rem' }}
            >
              {/* @ts-ignore */}
              <Pie {...pieConfig} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
