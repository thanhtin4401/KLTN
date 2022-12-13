const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quyenHangSchema = new Schema(
  {
    TenQuyenHang: {
      type: String,
      minlength: 3,
      default: 'user',
      required: true,
    },
    // =================== REFERENCES ==================
    MaTaiKhoan: [
      {
        type: Schema.Types.ObjectId,
        ref: 'taikhoan',
      },
    ],
  },
  { timestamps: true },
)

module.exports = mongoose.model('quyenhang', quyenHangSchema)
