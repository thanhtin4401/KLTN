import { https } from './axiosClient';

export let hotelService = {
  getAllHotel: (id) => {
    return https.get(`/api/khachsan`);
  },
};
