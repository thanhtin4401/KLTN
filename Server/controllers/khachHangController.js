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
  createCustomer: async (req, res) => {
    try {
      const newCustomer = await new KhachHang({
        Ngaylap: req.body.Ngaylap,
        NgayThue: req.body.NgayThue,
        NgayTra: req.body.NgayTra,
        MaKhachHang: req.body.MaKhachHang,
        PTTT: req.body.PTTT,
        MaTaiKhoan: req.body.MaTaiKhoan,
        MaKhuyenMai: req.body.MaKhuyenMai,
      });
      //save to DB
      const Customer = await newCustomer.save();
      res.status(200).json(Customer);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get Customer by id
  getCustomerById: async (req, res, next) => {
    try {
      const Customer = await KhachHang.findById(req.params.id);
      res.status(200).json(Customer);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update Customer
  updateCustomer: async (req, res) => {
    try {
      const updateCustomer = await KhachHang.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateCustomer);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete Customer
  deleteCustomer: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const Customer = await KhachHang.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = khachHangController;
