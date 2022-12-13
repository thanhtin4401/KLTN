const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phongSchema = new Schema(
  {
    TenPhong: {
      type: String,
      required: true,
    },
    SoLuongKhach: {
      type: Number,
      required: true,
    },
    SoLuongPhong: {
      type: Number,
      required: true,
    },
    SoLuongGiuong: {
      type: Number,
      required: true,
    },
    GiaPhong: {
      type: Number,
      required: true,
    },
    HinhAnh: {
      type: String,
      required: true,
    },
    MoTa: {
      type: String,
      required: true,
    },
    // ================== REFERENCES =====================
    MaLoaiPhong: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'loaiphong',
    },
    MaKhachSan: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'khachsan',
    },
    MaDichVuPhong: [
      {
        type: Schema.Types.ObjectId,
        ref: 'dichvuphong',
      },
    ],
  },
  { timestamps: true },
)

module.exports = mongoose.model('phong', phongSchema)
