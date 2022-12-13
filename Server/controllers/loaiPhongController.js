const LoaiPhong = require('../models/LoaiPhong')

const loaiPhongController = {
  getAllTypeRooms: async (req, res, next) => {
    try {
      return res.status(200).json(await LoaiPhong.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  getTypeRoomById: async (req, res, next) => {
    try {
      const loaiPhong = await LoaiPhong.findById(req.params.id)

      if (!loaiPhong) {
        return res.status(300).json('No Room Type found')
      }

      return res.status(200).json(loaiPhong)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },

  createTypeRoom: async (req, res) => {
    try {
      const loaiPhong = new LoaiPhong(req.body).save()
      return res.status(200).json(loaiPhong)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },

  updateTypeRoom: async (req, res) => {
    try {
      const loaiPhong = await LoaiPhong.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })

      return res.status(200).json(loaiPhong)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },

  deleteTypeRoom: async (req, res) => {
    try {
      await LoaiPhong.findByIdAndDelete(req.params.id)
      return res.status(200).json('Deleted successfully')
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },
}

module.exports = loaiPhongController
