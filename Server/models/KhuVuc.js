const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hinhAnhSchema = new Schema({
  url: String,
  filename: String,
})

const khuVucSchema = new Schema({
  TenKhuVuc: {
    type: String,
    required: true,
  },
  HinhAnh: [hinhAnhSchema],
  MoTa: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('khuvuc', khuVucSchema)
