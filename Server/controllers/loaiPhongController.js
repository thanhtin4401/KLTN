const LoaiPhong = require("../models/LoaiPhong");

// const Room = require("../models/Room");
const loaiPhongController = {
  // get room
  getAllTypeRoom: async (req, res, next) => {
    try {
      const LoaiPhongs = await LoaiPhong.find();
      res.status(200).json(LoaiPhongs);
    } catch (err) {
      next(err);
    }
  },

  createTypeRoom: async (req, res) => {
    try {
      const newTypeRoom = await new LoaiPhong({
        TenLoaiPhong: req.body.TenLoaiPhong,
        GiaThueTheoNgay: req.body.GiaThueTheoNgay,
        GiaThueTheoGio: req.body.GiaThueTheoGio,
        GiaThueTheoThang: req.body.GiaThueTheoThang,
      });
      //save to DB
      const TypeRoom = await newTypeRoom.save();
      res.status(200).json(TypeRoom);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get TypeRoom by id
  getTypeRoomById: async (req, res, next) => {
    try {
      const TypeRoom = await LoaiPhong.findById(req.params.id);
      res.status(200).json(TypeRoom);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update TypeRoom
  updateTypeRoom: async (req, res) => {
    try {
      const updateTypeRoom = await LoaiPhong.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateTypeRoom);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete TypeRoom
  deleteTypeRoom: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const TypeRoom = await LoaiPhong.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = loaiPhongController;
