const KhachSan = require('../models/KhachSan')
const KhuVuc = require('../models/KhuVuc')

const khachSanController = {
  getAllHotels: async (req, res, next) => {
    try {
      return res.status(200).json(await KhachSan.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  getHotelById: async (req, res, next) => {
    try {
      const khachSan = await KhachSan.findById(req.params.id)

      if (!khachSan) {
        return res.status(300).json('No Hotel found')
      }

      return res.status(200).json(khachSan)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  createHotel: async (req, res) => {
    try {
      const khachSan = await new KhachSan(req.body).save()
      await KhuVuc.findByIdAndUpdate(khachSan.MaKhuVuc, {
        $push: { KhachSan: khachSan._id },
      })

      return res.status(200).json(khachSan)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },

  updateHotel: async (req, res) => {
    try {
      const updateHotel = await KhachSan.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      return res.status(200).json(updateHotel)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },

  deleteHotel: async (req, res) => {
    try {
      const khachSan = await KhachSan.findById(req.params.id)

      await KhuVuc.findByIdAndUpdate(khachSan.MaKhuVuc, {
        $pull: { KhachSan: khachSan._id },
      })

      await khachSan.delete()

      return res.status(200).json('Delete successfully')
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },
}

module.exports = khachSanController
