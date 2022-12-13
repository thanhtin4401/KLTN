const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nhanVienSchema = new Schema({
  TenNV: {
    type: String,
    required: true,
  },
  Phai: {
    type: Boolean,
    required: true,
  },
  NgaySinh: {
    type: Date,
    required: true,
  },
  SDT: {
    type: String,
    required: true,
  },
  CMND: {
    type: String,
    required: true,
  },
  HinhAnh: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  // ====================== REFERENCES ===========================
  MaTaiKhoan: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "taikhoan",
  },
});

module.exports = mongoose.model("nhanvien", nhanVienSchema);
