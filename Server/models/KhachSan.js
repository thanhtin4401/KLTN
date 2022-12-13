const mongoose = require('mongoose')
const Schema = mongoose.Schema

const khachSanSchema = new Schema({
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
    type: String,
    default: false,
  },
  // ================ REFERENCES ===========================
  MaKhuVuc: {
    type: Schema.Types.ObjectId,
    ref: 'khuvuc',
  },
  MaPhong: [
    {
      type: Schema.Types.ObjectId,
      ref: 'phong',
    },
  ],
  MaChiTietHoaDon: [
    {
      type: Schema.Types.ObjectId,
      ref: 'chitiethoadon',
    },
  ],
})

module.exports = mongoose.model('khachsan', khachSanSchema)
