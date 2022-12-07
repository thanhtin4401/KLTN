const mongoose = require("mongoose");
const quyenHangSchema = new mongoose.Schema(
  {
    TenQuyenHang: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("quyenhang", quyenHangSchema);
