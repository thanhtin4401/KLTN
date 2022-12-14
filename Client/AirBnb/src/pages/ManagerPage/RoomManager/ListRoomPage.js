import React, { useEffect } from 'react';
import { Table, Tooltip } from 'antd';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../../redux/manager/room';
import RoomForm from './RoomForm';
import './ListRoomPage.scss';
import { roomService } from '../../../services/RoomService';
import ActionRoom from './ActionRoom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AddRoomPage from './AddRoomPage';
import UploadImgRoom from './UploadImg';
import { useNavigate } from 'react-router-dom';
function RoomManager() {
  const isDeleteSuccess = useSelector((state) => state.manager.room.isDeleteSuccess);
  const { t } = useTranslation();
  const isRegisterAccountSuccess = useSelector((state) => state.auth.isRegisterAccountSuccess);
  function convertString(str) {
    // Gộp nhiều dấu space thành 1 space
    str = str.replace(/\s+/g, ' ');
    // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
    str = str.trim();
    // bắt đầu xóa dấu tiếng việt  trong chuỗi
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str.toLowerCase();
  }
  const columns = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'id',
      key: 'ID',
      fixed: 'left',
      width: 50,
    },
    {
      title: t('Picture'),
      dataIndex: 'hinhAnh',
      key: '3',
    },
    {
      title: t('Room Name'),
      width: 100,
      dataIndex: 'tenPhong',
      key: 'tenPhong',
      fixed: 'left',
      width: 200,
      render: (_, record, index) => (
        <div>
          <Tooltip placement="top" title={record?.tenPhong}>
            {record?.tenPhong.length < 20
              ? record?.tenPhong
              : record?.tenPhong.slice(0, 20) + '...'}
          </Tooltip>
        </div>
      ),
    },
    {
      title: t('Guest'),
      dataIndex: 'khach',
      key: '1',
      width: 100,
    },
    {
      title: t('Bedroom'),
      dataIndex: 'phongNgu',
      key: '2',
      width: 100,
    },
    {
      title: t('Bed'),
      dataIndex: 'giuong',
      key: '3',
      width: 100,
    },
    {
      title: t('Bathroom'),
      dataIndex: 'phongTam',
      key: '4',
      width: 100,
    },

    {
      title: t('Price'),
      dataIndex: 'giaTien',
      key: '6',
      width: 100,
    },

    {
      title: 'Dich Vụ khác',
      // dataIndex: 'dichVuKhac',
      key: '15',
      render: (_, record, index) => (
        <div>
          <Tooltip placement="top" title={record?.dichVuKhac}>
            {record?.dichVuKhac.length < 10
              ? record?.dichVuKhac
              : record?.dichVuKhac.slice(0, 10) + '...'}
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Mô tả',

      key: '7',

      render: (_, record, index) => (
        <div>
          <Tooltip placement="top" title={record?.moTa}>
            {record?.moTa.length < 30 ? record?.moTa : record?.moTa.slice(0, 30) + '...'}
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'acion',
      width: 200,
    },
  ];
  const { Search } = Input;
  const [searchRoom, setsearchRoom] = useState(null);
  const onSearchRoom = (value) => {
    setsearchRoom(value);
  };
  const [dataRoom, setDataRoom] = useState([]);
  let fetchListRoom = () => {
    roomService
      .getRoomList()
      .then((res) => {
        let roomList = res.data.content.map((room, index) => {
          const dichVu =
            `${room.mayGiat ? 'Máy Giặt' : ''}` +
            `${room.banLa ? ', Bàn là' : ''}` +
            `${room.tivi ? ', Tivi' : ''}` +
            `${room.wifi ? ', Wifi' : ''}` +
            `${room.bep ? ', Bếp' : ''}` +
            `${room.doXe ? ', Đổ xe' : ''}` +
            `${room.hoBoi ? ', Hồ bơi' : ''}` +
            `${room.banUi ? ', Bàn Ủi' : ''}`;
          return {
            key: index,
            ...room,
            dichVuKhac: dichVu,
            hinhAnh: (
              <UploadImgRoom
                handleOnSuccess={fetchListRoom}
                imgRoom={room.hinhAnh}
                key={index}
                ID={room.id}
              />
            ),
            action: (
              <ActionRoom
                roomInfor={room}
                key={index}
                ID={room.id}
                handleOnSuccess={fetchListRoom}
              />
            ),
          };
        });
        console.log('roomList: ', roomList);
        setDataRoom(roomList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchListRoom();
  }, []);

  useEffect(() => {
    if (searchRoom == '' || searchRoom == null) {
      let fetchListRoom = () => {
        roomService
          .getRoomList()
          .then((res) => {
            let roomList = res.data.content.map((room, index) => {
              const dichVu =
                `${room.mayGiat ? 'Máy Giặt' : ''}` +
                `${room.banLa ? ', Bàn là' : ''}` +
                `${room.tivi ? ', Tivi' : ''}` +
                `${room.wifi ? ', Wifi' : ''}` +
                `${room.bep ? ', Bếp' : ''}` +
                `${room.doXe ? ', Đổ xe' : ''}` +
                `${room.hoBoi ? ', Hồ bơi' : ''}` +
                `${room.banUi ? ', Bàn Ủi' : ''}`;
              return {
                key: index,
                ...room,
                dichVuKhac: dichVu,
                hinhAnh: (
                  <UploadImgRoom
                    handleOnSuccess={fetchListRoom}
                    imgRoom={room.hinhAnh}
                    key={index}
                    ID={room.id}
                  />
                ),
                action: (
                  <ActionRoom
                    roomInfor={room}
                    key={index}
                    ID={room.id}
                    handleOnSuccess={fetchListRoom}
                  />
                ),
              };
            });

            setDataRoom(roomList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListRoom();
    } else {
      let fetchListRoom = () => {
        let roomRes = dataRoom.filter((loca) => {
          return convertString(loca.tenPhong) === convertString(searchRoom);
        });
        const roomList = [
          {
            ...roomRes[0],
            action: (
              <ActionRoom
                roomInfor={roomRes[0]}
                ID={roomRes[0]?.id}
                handleOnSuccess={fetchListRoom}
              />
            ),
          },
        ];
        setDataRoom(roomList);
      };

      fetchListRoom();
    }
  }, [searchRoom, isDeleteSuccess, isRegisterAccountSuccess]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowModal = () => {
    setIsModalOpen(true);
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/Manager/Hotel');
  };
  return (
    <>
      <div className="w-full text-left p-4 bg-white rounded-[2rem] mb-3 flex justify-between">
        <button
          className="flex items-center"
          onClick={() => {
            handleBack();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <p className="text-black text-[1rem] font-[600]">Back</p>
        </button>
        <h1 className="text-[#1c305e] ml-4 text-[1rem] font-[700]">{t('Quản lý phòng')}</h1>
      </div>
      <div className="bg-white rounded-[1rem] p-4 h-[91.5%]">
        <div className="flex items-center my-4">
          <Search
            placeholder={t('Find Room')}
            onSearch={onSearchRoom}
            enterButton
            className="search-manager"
          />
          <button
            onClick={handleShowModal}
            className="py-[0.4rem] px-[0.5rem] bg-[#8cc63f] transition-all hover:bg-[#b2da7f] text-white font-[600]  text-[0.8rem] rounded-[2rem]  ml-2"
          >
            {t('+ Add Room')}
          </button>
        </div>
        <Table
          columns={columns}
          dataSource={dataRoom}
          scroll={{
            y: 520,
          }}
        />
        <AddRoomPage
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleOnSuccess={() => {
            fetchListLocation();
          }}
        />
      </div>
    </>
  );
}

export default RoomManager;
