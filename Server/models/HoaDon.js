const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hoaDonSchema = new Schema({
  NgayThue: {
    type: Date,
    required: true,
  },
  NgayTra: {
    type: Date,
    required: true,
  },
  PTTT: {
    type: String,
    required: true,
  },
  TongGiaTien: {
    type: Number,
    required: true,
  },
  SoLuongKhach: {
    type: Number,
    required: true,
  },
  TrangThai: {
    type: Boolean,
    // Huy: 0, Da Thanh Toan: 1
    default: 1,
  },
  // ================ REFERENCES =============================
  MaPhong: {
    type: Schema.Types.ObjectId,
    ref: 'phong',
  },
  MaKhuyenMai: {
    type: Schema.Types.ObjectId,
    ref: 'khuyenmai',
    default: null,
  },
  TaiKhoan: {
    type: Schema.Types.String,
    ref: 'taikhoan',
    required: true,
  }
})

module.exports = mongoose.model('hoadon', hoaDonSchema)
