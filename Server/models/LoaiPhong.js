const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loaiPhongSchema = new Schema({
  TenLoaiPhong: {
    type: String,
    required: true,
  },
  GiaThueTheoNgay: {
    type: Number,
    required: true,
  },
  GiaThueTheoGio: {
    type: Number,
    required: true,
  },
  GiaThueTheoThang: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('loaiphong', loaiPhongSchema)
