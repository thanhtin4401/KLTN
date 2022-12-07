// const Room = require("../models/Room");

const khuyenMai = require("../models/KhuyenMai");
const khuyenMaiController = {
  // get room
  getAllPromotion: async (req, res, next) => {
    try {
      const khuyenMais = await khuyenMai.find();
      res.status(200).json(khuyenMais);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = khuyenMaiController;
