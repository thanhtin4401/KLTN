const KhachHang = require("../models/KhachHang");

// const Room = require("../models/Room");
const khachHangController = {
  // get room
  getAllCustomer: async (req, res, next) => {
    try {
      const KhachHangs = await KhachHang.find();
      res.status(200).json(KhachHangs);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = khachHangController;
