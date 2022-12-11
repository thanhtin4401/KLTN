const mongoose = require("mongoose");
const taiKhoanSchema = new mongoose.Schema(
  {
    TenTaiKhoan: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      //username ton tai thi ko dc tao nua
      unique: true,
    },
    TaiKhoan: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      //username ton tai thi ko dc tao nua
      unique: true,
    },
    MatKhau: {
      type: String,
      require: true,
      minlength: 6,
    },
    HinhAnh: {
      type: String,
      require: true,
    },
    QuyenHang: {
      type: String,
      require: true,
      minlength: 3,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TaiKhoan", taiKhoanSchema);
