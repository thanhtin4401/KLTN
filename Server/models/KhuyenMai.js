const mongoose = require("mongoose");
const { Schema } = mongoose;

const khuyenMaiSchema = new mongoose.Schema({
  TenKhuyenMai: {
    type: String,
    required: true,
  },
  ChiecKhau: {
    type: Number,
  },
  MoTa: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("khuyenmai", khuyenMaiSchema);
