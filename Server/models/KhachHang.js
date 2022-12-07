const mongoose = require("mongoose");
const { Schema } = mongoose;

const khachHangSchema = new mongoose.Schema({
  TenKH: {
    type: String,
    required: true,
  },
  Phai: {
    type: Boolean,
    required: true,
  },
  NgaySinh: {
    type: Date,
    required: true,
  },
  SDT: {
    type: String,
    required: true,
  },
  CMND: {
    type: String,
    required: true,
  },
  HinhAnh: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  MaTaiKhoan: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "taikhoan",
  },
});

module.exports = mongoose.model("khachhang", khachHangSchema);
