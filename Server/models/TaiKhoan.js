const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hinhAnhSchema = new Schema({
  url: String,
  filename: String,
})

const taiKhoanSchema = new Schema(
  {
    TenTaiKhoan: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      unique: true,
    },
    TaiKhoan: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    MatKhau: {
      type: String,
      require: true,
      minlength: 6,
    },
    HinhAnh: hinhAnhSchema,
    QuyenHang: {
      type: String,
      minlength: 3,
      default: 'user',
    },
    // ====================== REFERENCES ============================
    MaHoaDon: [
      {
        type: Schema.Types.ObjectId,
        ref: 'hoadon',
      },
    ],
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('TaiKhoan', taiKhoanSchema)
