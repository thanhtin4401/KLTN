const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hoaDonSchema = new Schema({
  NgayLap: {
    type: Date,
    required: true,
  },
  NgayThue: {
    type: Date,
    required: true,
  },
  NgayTra: {
    type: Date,
    required: true,
  },
  PTTT: {
    type: String,
    required: true,
  },
  TongGiaTien: {
    type: Number,
    required: true,
  },
  SoLuongKhach: {
    type: Number,
    required: true,
  },
  // ================ REFERENCES =============================
  MaPhong: {
    type: Schema.Types.ObjectId,
    ref: 'phong',
  },
  MaKhuyenMai: {
    type: Schema.Types.ObjectId,
    ref: 'khuyenmai',
  },
  MaKhachHang: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'khachhang',
  },
  MaTaiKhoan: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'taikhoan',
  },
  MaNhanVien: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'nhanvien',
  },
  MaChiTietHoaDon: [
    {
      type: Schema.Types.ObjectId,
      ref: 'chitiethoadon',
    },
  ],
})

module.exports = mongoose.model('hoadon', hoaDonSchema)
