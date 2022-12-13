import React, { useEffect } from 'react';
import { Table, Tooltip } from 'antd';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../../redux/manager/room';
import RoomForm from './HotelForm';
import './ListHotelPage.scss';

import ActionHotel from './ActionHotel';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AddHotelPage from './AddHotelPage';
import UploadImgRoom from './UploadImg';
import { hotelService } from '../../../services/HotelService';
function ListHotelManager() {
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
      // render: (_, record, index) => (
      //   <div>
      //     <Tooltip placement="top" title={record?.tenPhong}>
      //       {record?.tenPhong.length < 20
      //         ? record?.tenPhong
      //         : record?.tenPhong.slice(0, 20) + '...'}
      //     </Tooltip>
      //   </div>
      // ),
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
          {/* <Tooltip placement="top" title={record?.dichVuKhac}>
            {record?.dichVuKhac.length < 10
              ? record?.dichVuKhac
              : record?.dichVuKhac.slice(0, 10) + '...'}
          </Tooltip> */}
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
  const [searchHotel, setsearchHotel] = useState(null);
  const onSearchHotel = (value) => {
    setsearchHotel(value);
  };
  const [dataHotel, setDataHotel] = useState([]);
  let fetchListRoom = () => {
    hotelService
      .getAllHotel()
      .then((res) => {
        let roomList = res.data.map((room, index) => {
          return {
            key: index,
            ...room,
            // hinhAnh: (
            //   <UploadImgRoom
            //     handleOnSuccess={fetchListRoom}
            //     imgRoom={room.hinhAnh}
            //     key={index}
            //     ID={room.id}
            //   />
            // ),
            action: (
              <ActionHotel
                // roomInfor={room}
                key={index}
                // ID={room.id}
                handleOnSuccess={fetchListRoom}
              />
            ),
          };
        });
        console.log('roomList: ', roomList);
        setDataHotel(roomList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchListRoom();
  }, []);

  useEffect(() => {
    if (searchHotel == '' || searchHotel == null) {
      let fetchListRoom = () => {
        hotelService
          .getAllHotel()
          .then((res) => {
            let roomList = res.data.content.map((room, index) => {
              return {
                key: index,
                ...room,
                dichVuKhac: dichVu,
                // hinhAnh: (
                //   <UploadImgRoom
                //     handleOnSuccess={fetchListRoom}
                //     imgRoom={room.hinhAnh}
                //     key={index}
                //     ID={room.id}
                //   />
                // ),
                action: (
                  <ActionRoom
                    // roomInfor={room}
                    key={index}
                    // ID={room.id}
                    // handleOnSuccess={fetchListRoom}
                  />
                ),
              };
            });

            setDataHotel(roomList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListRoom();
    } else {
      let fetchListRoom = () => {
        let roomRes = dataHotel.filter((loca) => {
          return convertString(loca.tenPhong) === convertString(searchHotel);
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
        setDataHotel(roomList);
      };

      fetchListRoom();
    }
  }, [searchHotel, isDeleteSuccess, isRegisterAccountSuccess]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="w-full text-left p-2 bg-white rounded-[2rem] mb-3">
        <h1 className="text-[#1c305e] ml-4 text-[1rem] font-[700]">{t('Quản lý khách sạn')}</h1>
      </div>
      <div className="bg-white rounded-[1rem] p-4 h-[91.5%]">
        <div className="flex items-center mb-2">
          <Search
            placeholder={t('Find Account')}
            onSearch={onSearchHotel}
            enterButton
            className="search-manager"
          />
          <button
            onClick={handleShowModal}
            className="py-[0.4rem] px-[0.5rem] bg-[#8cc63f] transition-all hover:bg-[#b2da7f] text-white font-[600]  text-[0.8rem] rounded-[2rem]  ml-2"
          >
            {t('+ Add Account')}
          </button>
        </div>
        <Table
          columns={columns}
          dataSource={dataHotel}
          className="table-manger"
          pagination={{
            pageSize: 20,
          }}
          scroll={{
            y: 520,
          }}
        />
        <AddHotelPage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
      <div className="flex items-center my-4"></div>
      <Table
        columns={columns}
        dataSource={dataHotel}
        scroll={{
          x: 1300,
        }}
      />
      <AddHotelPage
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleOnSuccess={() => {
          fetchListLocation();
        }}
      />
      ;
    </>
  );
}

export default ListHotelManager;
