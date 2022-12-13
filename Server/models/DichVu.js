const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dichVuSchema = new Schema(
  {
    TenDichVu: {
      type: String,
      required: true,
      unique: true,
    },
    MaDichVuPhong: [
      {
        type: Schema.Types.ObjectId,
        ref: 'dichvuphong',
      },
    ],
  },
  { timestamps: true },
)

module.exports = mongoose.model('dichvu', dichVuSchema)
