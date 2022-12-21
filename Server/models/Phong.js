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
    HinhAnh: hinhAnhSchema,
    MoTa: {
      type: String,
      required: true,
    },
    TrangThai: {
      type: Boolean,
      // Trong: 0, Da dat: 1
      default: 0,
    },
    // ================== REFERENCES =====================
    TenLoaiPhong: {
      type: String,
      ref: 'loaiphong',
    },
    TenDichVu: [{
      type: Schema.Types.String,
      ref: 'dichvu',
    }],
    MaKhachSan: {
      type: Schema.Types.ObjectId,
      ref: 'khachsan',
    }
  },
  { timestamps: true },
)

module.exports = mongoose.model('phong', phongSchema)
