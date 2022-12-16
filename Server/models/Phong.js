const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hinhAnhSchema = new Schema({
  url: String,
  filename: String,
})

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
    HinhAnh: [hinhAnhSchema],
    MoTa: {
      type: String,
      required: true,
    },
    TrangThai: {
      type: Boolean,
      default: 0,
    },
    // ================== REFERENCES =====================
    MaLoaiPhong: {
      type: Schema.Types.ObjectId,
      ref: 'loaiphong',
    },
    MaKhachSan: {
      type: Schema.Types.ObjectId,
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
