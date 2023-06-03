import React from 'react';
import { Button, Switch, Form, Input, Modal, Select, Card } from 'antd';

const CreateBill = ({ isModalOpen, handleOk, handleCancel }: any) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Modal
        title='Fatura Olustur'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Musteri adi'
            name='username'
            rules={[{ required: true, message: 'Müşteri adını girin!' }]}
          >
            <Input placeholder='Müşteri adı' />
          </Form.Item>

          <Form.Item
            label='Musteri telefon'
            name='phone'
            rules={[
              { required: true, message: 'Müşteri telefon numarasını girin!' },
            ]}
          >
            <Input placeholder='Müşteri telefonu' maxLength={11} />
          </Form.Item>

          <Form.Item
            label='Odeme Yontemi'
            name='pay'
            rules={[{ required: true, message: 'Ödeme Yöntemini Seçin!' }]}
          >
            <Select placeholder='Ödeme yöntemi seçin'>
              {/* @ts-ignore */}
              <Select.Option value='cash'>nakit</Select.Option>
              {/* @ts-ignore */}
              <Select.Option value='card'>kredi kart</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='Eve Servis' name='toHome' valuePropName='checked'>
            <Switch />
          </Form.Item>
          <br />

          {/* @ts-ignore */}
          <Card className='w-100'>
            <div className='flex justify-between'>
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className='flex justify-between my-2'>
              <span>KDV Toplam %8</span>
              <span className='text-red-600'>+43.92₺</span>
            </div>
            <div className='flex justify-between'>
              <b>Toplam</b>
              <b>592.92₺</b>
            </div>
            <Button
              htmlType='submit'
              className='mt-4 w-full'
              type='primary'
              size='large'
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBill;
