import React, { useEffect, useState } from 'react';

import { Button, Modal, Form, Input, Select, DatePicker, Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/auth/authSlice';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import './AddPromotionPage.scss';
function AddUserPage({ setIsModalOpen, isModalOpen }) {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    let birthday = moment(values.birthday).format('dd / mm / yyyy');

    const infor = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      birthday: birthday,
      gender: values.gender,
      role: 'USER',
    };

    dispatch(registerUser(infor));
  };

  const onFinishFailed = (errorInfo) => {};

  const { Option } = Select;

  const { t } = useTranslation();

  const auth = useSelector((state) => state.auth);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title={t('Add Promotion')}
      open={isModalOpen}
      className="modal_add-user"
      onCancel={handleCancel}
    >
      <div className=" w-full flex justify-center items-center">
        <div className="w-full">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <p className="">{t('Tên khuyến mãi:')}</p>
            <Form.Item
              className="mb-4"
              name="name"
              rules={[
                {
                  required: true,
                  message: t('Please input your username!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                placeholder={t('tên khuyến mãi')}
              />
            </Form.Item>
            <p className="">{t('Ngày bắt đầu:')}</p>
            <Form.Item
              className="mb-4"
              name="birthday"
              wrapperCol={{ sm: 24 }}
              style={{ width: '100%', marginRight: '1rem' }}
            >
              <DatePicker className="datepicker-register w-full p-[8.3px]" format={'DD/MM/YYYY'} />
            </Form.Item>
            <p className="">{t('Ngày kết thúc:')}</p>
            <Form.Item
              className="mb-4"
              name="birthday"
              wrapperCol={{ sm: 24 }}
              style={{ width: '100%', marginRight: '1rem' }}
            >
              <DatePicker className="datepicker-register w-full p-[8.3px]" format={'DD/MM/YYYY'} />
            </Form.Item>
            <p className="">{t('chiếc khấu')}</p>
            <Form.Item
              className="mb-4"
              name="phone"
              rules={[
                {
                  required: true,
                  message: t('Please input your username!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                placeholder={t('%')}
              />
            </Form.Item>

            <Form.Item>
              <button
                type="primary"
                htmlType="submit"
                className="hover:blacks rounded-[0.5rem] bg-slate-700 hover:bg-slate-500 btn-login text-white py-[0.7rem] font-[700] w-full px-[0.5rem]"
              >
                {t('Tạo khuyến mãi')}
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default AddUserPage;
