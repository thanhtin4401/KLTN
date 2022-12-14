import { useSelect, Search } from '@material-tailwind/react';
import React, { useEffect, koutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Button, Tag, message } from 'antd';
import { getSearchUser, getUserList } from '../../../redux/manager/user';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './ListPromotionPage.scss';
import AddPromotionPage from './AddPromotion';
import ActionPromotion from './ActionPromotion';
import { setDate } from 'date-fns';
import { userService } from '../../../services/userService';
const ListPromotionPage = () => {
  const isDeleteSuccess = useSelector((state) => state.manager.user.isDeleteSuccess);
  const isUpdateSuccess = useSelector((state) => state.manager.user.isUpdateSuccess);

  const dispatch = useDispatch();
  const isRegisterAccountSuccess = useSelector((state) => state.auth.isRegisterAccountSuccess);
  const { t } = useTranslation();

  const [isUpdateUserSuccess, setIsUpdatePromotionSuccess] = useState(false);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'ID',
    },
    {
      title: t('Tên khuyến mãi'),
      dataIndex: 'TenKhuyenMai',
      key: 'TenKhuyenMai',
    },
    {
      title: t('Chiếc khấu'),
      dataIndex: 'ChietKhau',
      key: 'ChiecKhau',
    },
    {
      title: t('Ngày bắt đầu'),
      dataIndex: 'NgayBatDau',
      key: 'NgayKetThuc',
    },

    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'acion',
    },
  ];
  const { Search } = Input;
  const [searchUser, setsearchUser] = useState(null);
  const onSearchUser = (value) => {
    setsearchUser(value);
  };
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    let fetchListUser = () => {
      userService
        .getUserList()
        .then((res) => {
          let userList = res.data.content.map((user, index) => {
            return {
              key: index,
              ...user,
              action: (
                <ActionPromotion
                  handleOnSuccess={fetchListUser}
                  key={index}
                  ID={user.id}
                  setIsUpdatePromotionSuccess={setIsUpdatePromotionSuccess}
                />
              ),
            };
          });

          setDataUser(userList);
        })
        .catch((err) => {});
    };
    fetchListUser();
  }, []);

  useEffect(() => {
    if (searchUser == '' || searchUser == null) {
      let fetchListUser = () => {
        userService
          .getUserList()
          .then((res) => {
            let userList = res.data.content.map((user, index) => {
              return {
                key: index,
                ...user,
                action: <ActionUser key={index} ID={user.id} handleOnSuccess={fetchListUser} />,
              };
            });

            setDataUser(userList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListUser();
    } else {
      let fetchListUser = () => {
        userService
          .getSearchUser(searchUser)
          .then((res) => {
            let userList = res.data.content.map((user, index) => {
              return {
                key: index,
                ...user,
                action: (
                  <ActionUser
                    userInfor={user}
                    key={index}
                    ID={user.id}
                    handleOnSuccess={fetchListUser}
                  />
                ),
              };
            });
            setDataUser(userList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListUser();
    }
  }, [searchUser, isDeleteSuccess, isRegisterAccountSuccess, isUpdateSuccess]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-full text-left p-2 bg-white rounded-[2rem] mb-3">
        <h1 className="text-[#1c305e] ml-4 text-[1rem] font-[700]">{t('Quản lý khuyến mãi')}</h1>
      </div>
      <div className="bg-white rounded-[1rem] p-4 h-[91.5%]">
        <div className="flex items-center mb-2">
          <Search
            placeholder={t('Tìm mã khuyến mãi')}
            onSearch={onSearchUser}
            enterButton
            className="search-manager"
          />
          <button
            onClick={handleShowModal}
            className="py-[0.4rem] px-[0.5rem] bg-[#8cc63f] transition-all hover:bg-[#b2da7f] text-white font-[600]  text-[0.8rem] rounded-[2rem]  ml-2"
          >
            {t('+ Thêm khuyến mãi')}
          </button>
        </div>
        <Table
          columns={columns}
          dataSource={dataUser}
          className="table-manger"
          pagination={{
            pageSize: 20,
          }}
          scroll={{
            y: 520,
          }}
        />
        <AddPromotionPage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </>
  );
};

export default ListPromotionPage;
