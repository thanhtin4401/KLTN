const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hinhAnhSchema = new Schema({
  url: String,
  filename: String,
})

const khachSanSchema = new Schema({
  TenKhachSan: {
    type: String,
    required: true,
  },
  TieuDe: {
    type: String,
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
  HinhAnh: [hinhAnhSchema],
  MoTa: {
    type: String,
    default: false,
  },
  // ================ REFERENCES ===========================
  MaKhuVuc: {
    type: Schema.Types.ObjectId,
    ref: 'khuvuc',
  }
})

module.exports = mongoose.model('khachsan', khachSanSchema)
