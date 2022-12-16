const HoaDon = require('../models/HoaDon')
const KhuyenMai = require('../models/KhuyenMai')

const khuyenMaiController = {
  getAllPromotions: async (req, res, next) => {
    try {
      return res.status(200).json(await KhuyenMai.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  getPromotionById: async (req, res, next) => {
    try {
      const khuyenMai = await KhuyenMai.findById(req.params.id)

      if (!khuyenMai) {
        return res.status(300).json('No promotion found')
      }

      return res.status(200).json(khuyenMai)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  createPromotion: async (req, res) => {
    try {
      const khuyenMai = await new KhuyenMai(req.body.KhuyenMai).save()
      return res.status(200).json(khuyenMai)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  updatePromotion: async (req, res) => {
    try {
      const khuyenMai = await KhuyenMai.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      return res.status(200).json(khuyenMai)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  deletePromotion: async (req, res) => {
    try {
      const khuyenMai = await KhuyenMai.findById(req.params.id)

      if (!khuyenMai) {
        return res.status(300).json('No promotion found')
      }

      await HoaDon.find({ MaKhuyenMai: khuyenMai._id }).deleteMany()
      await khuyenMai.deleteOne()

      return res.status(200).json('Delete successfully')
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },
}

module.exports = khuyenMaiController
