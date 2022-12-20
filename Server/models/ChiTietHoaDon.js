const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chiTietHoaDonSchema = new Schema({
  MaHD: {
    type: Schema.Types.ObjectId,
    ref: 'hoadon',
    default: null,
  },
  MaPhong: {
    type: Schema.Types.ObjectId,
    ref: 'phong',
    default: null,
  },
})

module.exports = mongoose.model('chitiethoadon', chiTietHoaDonSchema)
