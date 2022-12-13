const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chiTietHoaDonSchema = new Schema({
  MaChiTietHoaDon: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  TrangThai: {
    type: String,
    required: true,
    default: '',
  },
  // ==================== REFERENCES =========================
  MaHD: {
    type: Schema.Types.ObjectId,
    ref: 'hoadon',
    default: null,
  },
  MaKhachSan: {
    type: Schema.Types.ObjectId,
    ref: 'khachsan',
    default: null,
  },
})

module.exports = mongoose.model('chitiethoadon', chiTietHoaDonSchema)
