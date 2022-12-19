const ChiTietHoaDon = require('../models/ChiTietHoaDon')
const HoaDon = require('../models/HoaDon')
const KhachSan = require('../models/KhachSan')

const hoaDonController = {
  getAllBills: async (req, res, next) => {
    try {
      return res.status(200).json(await HoaDon.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  getBillById: async (req, res, next) => {
    try {
      const hoadon = await HoaDon.findById(req.params.id)

      if (!hoadon) {
        return res.status(300).json('No Bill found')
      }

      return res.status(200).json(hoadon)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  createBill: async (req, res) => {
    try {
      const hoadon = await new HoaDon(req.body).save()

      await new ChiTietHoaDon({
        MaHD: hoadon._id,
        MaPhong: hoadon.MaPhong,
      }).save();
      
      return res.status(200).json(hoadon)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },

  updateBill: async (req, res) => {
    try {
      const hoadon = await HoaDon.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      return res.status(200).json(hoadon)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  deleteBill: async (req, res) => {
    try {
      const hoadon = await HoaDon.findById(req.params.id)

      await ChiTietHoaDon.find({ MaHD: hoadon._id }, (err, arr) => {
        if (err) {
          return res.status(300).json(err.message)
        }

        arr.forEach(async (element) => {
          await KhachSan.find({ MaChiTietHoaDon: element._id }).deleteMany()
        })
      }).deleteMany()

      await hoadon.delete()

      return res.status(200).json('Delete successfully')
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },
}

module.exports = hoaDonController
