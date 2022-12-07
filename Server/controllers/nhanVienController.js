const NhanVien = require("../models/NhanVien");

// const Room = require("../models/Room");
const nhanVienController = {
  // get room
  getAllEmloyee: async (req, res, next) => {
    try {
      const NhanViens = await NhanVien.find();
      res.status(200).json(NhanViens);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = nhanVienController;
