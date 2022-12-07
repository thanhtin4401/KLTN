const mongoose = require("mongoose");
const { Schema } = mongoose;

const hoaDonSchema = new mongoose.Schema({
  Ngaylap: {
    type: Date,
    required: true,
  },
  NgayThue: {
    type: Date,
    required: true,
  },
  NgayTra: {
    type: Date,
    required: true,
  },
  MaKhachHang: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "KhachHang",
  },
  PTTT: {
    type: String,
    required: true,
  },

  MaTaiKhoan: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "TaiKhoan",
  },
  MaKhuyenMai: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "KhuyenMai",
  },
});

module.exports = mongoose.model("hoadon", hoaDonSchema);
