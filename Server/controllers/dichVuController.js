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

  createService: async (req, res) => {
    try {
      const newService = await new DichVu({
        TenDichVu: req.body.TenDichVu,
      });
      //save to DB
      const Service = await newService.save();
      res.status(200).json(Service);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get Service by id
  getServiceById: async (req, res, next) => {
    try {
      const Service = await DichVu.findById(req.params.id);
      res.status(200).json(Service);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update Service
  updateService: async (req, res) => {
    try {
      const updateService = await DichVu.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateService);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete Service
  deleteService: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const Service = await DichVu.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = dichVuController;
