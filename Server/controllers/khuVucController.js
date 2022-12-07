// const Room = require("../models/Room");
const KhachSan = require("../models/KhachSan");
const KhuVuc = require("../models/KhuVuc");
const khuVucController = {
  // get room
  getAllLocation: async (req, res, next) => {
    try {
      const KhuVucs = await KhuVuc.find();
      res.status(200).json(KhuVucs);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = khuVucController;
