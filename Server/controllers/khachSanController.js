const KhachSan = require('../models/KhachSan')
const KhuVuc = require('../models/KhuVuc')

const khachSanController = {
  // get room
  getAllHotel: async (req, res, next) => {
    try {
      const KhachSans = await KhachSan.find()
      res.status(200).json(KhachSans)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // get Hotel by id
  getHotelById: async (req, res, next) => {
    try {
      const Hotel = await KhachSan.findById(req.params.id)
      res.status(200).json(Hotel)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  createHotel: async (req, res) => {
    try {
      const khachSan = await new KhachSan(req.body).save()
      await KhuVuc.findByIdAndUpdate(khachSan.MaKhuVuc, {
        $push: { KhachSan: khachSan._id },
      })

      res.status(200).json(khachSan)
    } catch (err) {
      res.status(500).json(err.message)
    }
  },

  // update Hotel
  updateHotel: async (req, res) => {
    try {
      const updateHotel = await KhachSan.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).json(updateHotel)
    } catch (err) {
      res.status(500).json(err.message)
    }
  },

  // delete Hotel
  deleteHotel: async (req, res) => {
    try {
      const khachSan = await KhachSan.findById(req.params.id)

      await KhuVuc.findByIdAndUpdate(khachSan.MaKhuVuc, {
        $pull: { KhachSan: khachSan._id },
      })

      await khachSan.delete()

      res.status(200).json('Delete successfully')
    } catch (err) {
      res.status(500).json(err.message)
    }
  },
}

module.exports = khachSanController
