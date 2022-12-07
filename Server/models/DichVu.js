const mongoose = require("mongoose");
const dichVuSchema = new mongoose.Schema(
  {
    TenDichVu: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DichVu", dichVuSchema);
