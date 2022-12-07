const mongoose = require("mongoose");
const phongSchema = new mongoose.Schema(
  {
    TenPhong: {
      type: String,
      required: true,
    },
    SoLuongKhach: {
      type: Number,
      required: true,
    },
    SoLuongPhong: {
      type: Number,
      required: true,
    },
    SoLuongGiuong: {
      type: Number,
      required: true,
    },
    GiaPhong: {
      type: Number,
      required: true,
    },
    HinhAnh: {
      type: String,
      required: true,
    },
    MoTa: {
      type: String,
      required: true,
    },
    MaLoaiPhong: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "loaiphong",
    },
    MaKhachSan: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "khachsan",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", phongSchema);
