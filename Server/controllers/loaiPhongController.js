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
};

module.exports = loaiPhongController;
