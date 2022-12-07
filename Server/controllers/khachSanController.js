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
};

module.exports = khachSanController;
