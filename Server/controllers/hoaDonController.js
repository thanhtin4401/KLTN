const HoaDon = require("../models/HoaDon");
const KhachHang = require("../models/KhachHang");

// const Room = require("../models/Room");
const hoaDonController = {
  // get room
  getAllBill: async (req, res, next) => {
    try {
      const HoaDons = await HoaDon.find();
      res.status(200).json(HoaDons);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = hoaDonController;
