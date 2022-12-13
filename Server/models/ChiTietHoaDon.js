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
  },
  // ==================== REFERENCES =========================
  MaHD: {
    type: Schema.Types.ObjectId,
    ref: 'hoadon',
  },
  MaKhachSan: {
    type: Schema.Types.ObjectId,
    ref: 'khachsan',
  },
})

module.exports = mongoose.model('chitiethoadon', chiTietHoaDonSchema)
