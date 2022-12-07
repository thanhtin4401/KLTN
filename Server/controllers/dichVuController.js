const DichVu = require("../models/DichVu");

// const Room = require("../models/Room");
const dichVuController = {
  // get room
  getAllService: async (req, res, next) => {
    try {
      const DichVus = await DichVu.find();
      res.status(200).json(DichVus);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = dichVuController;
