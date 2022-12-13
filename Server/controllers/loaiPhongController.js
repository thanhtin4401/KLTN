const LoaiPhong = require('../models/LoaiPhong')

const loaiPhongController = {
  // get room
  getAllTypeRoom: async (req, res, next) => {
    try {
      const LoaiPhongs = await LoaiPhong.find()
      res.status(200).json(LoaiPhongs)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // get TypeRoom by id
  getTypeRoomById: async (req, res, next) => {
    try {
      const loaiPhong = await LoaiPhong.findById(req.params.id)
      res.status(200).json(loaiPhong)
    } catch (err) {
      res.status(500).json(err.message)
    }
  },

  createTypeRoom: async (req, res) => {
    try {
      const loaiPhong = new LoaiPhong(req.body)
      await loaiPhong.save()
      res.status(200).json(loaiPhong)
    } catch (err) {
      res.status(500).json(err.message)
    }
  },

  // update TypeRoom
  updateTypeRoom: async (req, res) => {
    try {
      const loaiPhong = await LoaiPhong.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).json(loaiPhong)
    } catch (err) {
      res.status(500).json(err.message)
    }
  },

  // delete TypeRoom
  deleteTypeRoom: async (req, res) => {
    try {
      await LoaiPhong.findByIdAndDelete(req.params.id)
      res.status(200).json('Deleted successfully')
    } catch (err) {
      res.status(500).json(err.message)
    }
  },
}

module.exports = loaiPhongController
