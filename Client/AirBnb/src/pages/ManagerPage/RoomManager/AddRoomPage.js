import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Col,
  Row,
  InputNumber,
  Checkbox,
  message,
  Upload,
} from 'antd';
import { useTranslation } from 'react-i18next';
import './AddRoomPage.scss';
import './AddRoomPage.scss';
import { roomService } from '../../../services/RoomService';
import { serviceRoomSv } from '../../../services/serviceRoomSv';
import { useParams } from 'react-router-dom';

function AddRoomPage({ setIsModalOpen, isModalOpen, handleOnSuccess }) {
  const { TextArea } = Input;
  const params = useParams();

  const onFinish = (values) => {
    const roomInfor = {
      TenPhong: values.TenPhong,
      GiaPhong: values.GiaTien,
      MoTa: values.MoTa,
      SoLuongGiuong: values.SoLuongGiuong,
      SoLuongKhach: values.SoLuongKhach,
      SoLuongPhong: values.SoLuongPhong,
      TrangThai: false,
      MaKhachSan: params.hotelId,
    };
    roomService
      .postRoom(roomInfor)
      .then((res) => {
        message.success('them thanh cong');
        handleOnSuccess();
        setIsModalOpen(false);
        return res;
      })
      .catch((err) => {
        message.success('them thanh cong');
        console.log(err);
      });
  };

  const [serviceList, setserviceList] = useState([]);
  useEffect(() => {
    serviceRoomSv
      .getALlService()
      .then((res) => {
        setserviceList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onFinishFailed = (errorInfo) => {};

  const { t } = useTranslation();

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title={t('Add Room')}
      open={isModalOpen}
      className="modal_add-room"
      onCancel={handleCancel}
    >
      <div className=" w-full flex justify-center items-center">
        <div className="w-full ">
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
            <div className="flex w-full justify-between">
              <div className="w-2/4 pr-6 border-r-[1px]">
                <h2 className="font-[600] text-[1rem] text-[#1c305e] ">Thông tin chung</h2>
                <p className="">{t('Tên phòng')}</p>
                <Form.Item
                  className="mb-4"
                  name="TenPhong"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your Room!'),
                    },
                  ]}
                >
                  <Input
                    style={{ width: '100%' }}
                    className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                    placeholder="Tên phòng"
                  />
                </Form.Item>

                <p className="">{t('Mô tả')}</p>
                <Form.Item
                  className="mb-4"
                  name="MoTa"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your Country!'),
                    },
                  ]}
                >
                  <TextArea
                    className="border w-full py-[14] rounded-[0.5rem]"
                    placeholder="Mô tả"
                  />
                </Form.Item>

                <p className="">{t('Price')}</p>
                <Form.Item
                  className="mb-4"
                  name="GiaTien"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your image!'),
                    },
                  ]}
                >
                  <Input
                    style={{ width: '100%' }}
                    className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                    placeholder={t('Price')}
                  />
                </Form.Item>
                <p className="">{t('Hinh anh')}</p>
                <Form.Item
                  className="mb-4"
                  name="HinhAnh"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your image!'),
                    },
                  ]}
                >
                  <Upload action="/upload.do" listType="picture-card">
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
              </div>
              <div className="w-2/4 pl-6">
                <h2 className="font-[600] text-[1rem] text-[#1c305e] ">Thông tin bổ xung</h2>
                <p className="">{t('Số lượng giường')}</p>
                <Form.Item
                  className="mb-4"
                  name="SoLuongGiuong"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your image!'),
                    },
                  ]}
                >
                  <Input
                    style={{ width: '100%' }}
                    className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                    placeholder={t('Link hinh anh')}
                  />
                </Form.Item>
                <p className="">{t('Số lượng phòng')}</p>
                <Form.Item
                  className="mb-4"
                  name="SoLuongPhong"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your image!'),
                    },
                  ]}
                >
                  <Input
                    style={{ width: '100%' }}
                    className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                    placeholder={t('Link hinh anh')}
                  />
                </Form.Item>
                <p className="">{t('Số lượng khách')}</p>
                <Form.Item
                  className="mb-4"
                  name="SoLuongKhach"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your image!'),
                    },
                  ]}
                >
                  <Input
                    style={{ width: '100%' }}
                    className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                    placeholder={t('Link hinh anh')}
                  />
                </Form.Item>
              </div>
            </div>
            <Form.Item>
              <button
                type="primary"
                htmlType="submit"
                className="hover:blacks rounded-[0.5rem] bg-slate-500 btn-login text-white py-[1rem] px-[0.5rem]"
              >
                {t('Add Room')}
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default AddRoomPage;
