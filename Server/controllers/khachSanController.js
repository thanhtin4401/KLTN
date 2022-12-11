// const Room = require("../models/Room");
const KhachSan = require("../models/KhachSan");
const khachSanController = {
  // get room
  getAllHotel: async (req, res, next) => {
    try {
      const KhachSans = await KhachSan.find();
      res.status(200).json(KhachSans);
    } catch (err) {
      next(err);
    }
  },

  createHotel: async (req, res) => {
    try {
      const newHotel = await new KhachSan({
        TenKhachSan: req.body.TenKhachSan,
        TenKhachSan: req.body.TenKhachSan,
        TieuDe: req.body.TieuDe,
        DanhGia: req.body.DanhGia,
        MucGiaPhong: req.body.MucGiaPhong,
        DiaChi: req.body.DiaChi,
        HinhAnh: req.body.HinhAnh,
        MoTa: req.body.MoTa,
        MaKhuVuc: req.body.MaKhuVuc,
      });
      //save to DB
      const Hotel = await newHotel.save();
      res.status(200).json(Hotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get Hotel by id
  getHotelById: async (req, res, next) => {
    try {
      const Hotel = await KhachSan.findById(req.params.id);
      res.status(200).json(Hotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update Hotel
  updateHotel: async (req, res) => {
    try {
      const updateHotel = await KhachSan.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateHotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete Hotel
  deleteHotel: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const Hotel = await KhachSan.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = khachSanController;
