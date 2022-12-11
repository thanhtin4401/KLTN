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

  createLocation: async (req, res) => {
    try {
      const newLocation = await new KhuVuc({
        TenKhuVuc: req.body.TenKhuVuc,
        HinhAnh: req.body.HinhAnh,
        MoTa: req.body.MoTa,
      });
      //save to DB
      const Location = await newLocation.save();
      res.status(200).json(Location);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get Location by id
  getLocationById: async (req, res, next) => {
    try {
      const Location = await KhuVuc.findById(req.params.id);
      res.status(200).json(Location);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update Location
  updateLocation: async (req, res) => {
    try {
      const updateLocation = await KhuVuc.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateLocation);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete Location
  deleteLocation: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const Location = await KhuVuc.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = khuVucController;
