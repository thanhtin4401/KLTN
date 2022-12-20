const mongoose = require('mongoose')
const Schema = mongoose.Schema

const khachHangSchema = new Schema({
  TenKH: {
    type: String,
  },
  Phai: {
    type: Boolean,
  },
  NgaySinh: {
    type: Date,
  },
  SDT: {
    type: String,
  },
  CMND: {
    type: String,
  },
  HinhAnh: {
    type: String,
  },
  Email: {
    type: String,
  },
  // =================== REFERENCES ===========================
  MaTaiKhoan: {
    type: Schema.Types.ObjectId,
    ref: 'taikhoan',
  },
})

module.exports = mongoose.model('khachhang', khachHangSchema)
