const HoaDon = require("../models/HoaDon");

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

  createBill: async (req, res) => {
    try {
      const newBill = await new HoaDon({
        TenKH: req.body.TenKH,
        Phai: req.body.Phai,
        NgaySinh: req.body.NgaySinh,
        SDT: req.body.SDT,
        CMND: req.body.CMND,
        HinhAnh: req.body.HinhAnh,
        Email: req.body.Email,
        MaTaiKhoan: req.body.MaTaiKhoan,
      });
      //save to DB
      const Bill = await newBill.save();
      res.status(200).json(Bill);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get Bill by id
  getBillById: async (req, res, next) => {
    try {
      const Bill = await HoaDon.findById(req.params.id);
      res.status(200).json(Bill);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update Bill
  updateBill: async (req, res) => {
    try {
      const updateBill = await HoaDon.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateBill);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete Bill
  deleteBill: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const Bill = await HoaDon.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = hoaDonController;
