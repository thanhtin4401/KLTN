const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const khuyenMaiSchema = new Schema({
  TenKhuyenMai: {
    type: String,
    required: true,
  },
  ChiecKhau: {
    type: Number,
  },
  NgayBatDau: {
    type: Date,
  },
  NgayKetThuc: {
    type: Date,
  },
  MoTa: {
    type: String,
    required: true,
  },

  // ==================== REFERENCES ====================
  MaHoaDon: [
    {
      type: Schema.Types.ObjectId,
      ref: "hoadon",
    },
  ],
});

module.exports = mongoose.model("khuyenmai", khuyenMaiSchema);
