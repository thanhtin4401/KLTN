const mongoose = require("mongoose");
const { Schema } = mongoose;

const khuVucSchema = new mongoose.Schema({
  TenKhuVuc: {
    type: String,
    required: true,
  },
  HinhAnh: {
    type: [String],
  },
  MoTa: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("KhuVuc", khuVucSchema);
