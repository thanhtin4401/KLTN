const mongoose = require("mongoose");
const { Schema } = mongoose;

const khachSanSchema = new mongoose.Schema({
  TenKhachSan: {
    type: String,
    required: true,
  },
  TieuDe: {
    type: [String],
  },
  DanhGia: {
    type: Number,
    required: true,
  },
  MucGiaPhong: {
    type: String,
    required: true,
  },
  DiaChi: {
    type: String,
    required: true,
  },
  HinhAnh: {
    type: String,
    required: true,
  },
  MoTa: {
    type: Boolean,
    default: false,
  },
  MaKhuVuc: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "khuvuc",
  },
});

module.exports = mongoose.model("KhachSan", khachSanSchema);
