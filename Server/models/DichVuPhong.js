const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dichVuPhongSchema = new Schema(
  {
    MaDichVu: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "dichvu",
    },
    MaPhong: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "phong",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("dichvuphong", dichVuPhongSchema);
