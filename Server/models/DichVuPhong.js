const mongoose = require("mongoose");
const dichVuPhongSchema = new mongoose.Schema(
  {
    MaDichVu: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "DichVu",
    },
    MaPhong: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Phong",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DichVuPhong", dichVuPhongSchema);
