const mongoose = require('mongoose')
const Schema = mongoose.Schema

const khuVucSchema = new Schema({
  TenKhuVuc: {
    type: String,
    required: true,
  },
  HinhAnh: {
    type: [String],
  },
  MoTa: {
    type: Number,
    required: true,
  },
  // ====================== REFERENCES =========================
  KhachSan: [
    {
      type: Schema.Types.ObjectId,
      ref: 'khachsan',
    },
  ],
})

module.exports = mongoose.model('khuvuc', khuVucSchema)
