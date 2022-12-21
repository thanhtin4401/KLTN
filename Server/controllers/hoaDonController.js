const ChiTietHoaDon = require('../models/ChiTietHoaDon')
const HoaDon = require('../models/HoaDon')
const Phong = require('../models/Phong')

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
      const hoadon = await new HoaDon(req.body).save();

      await new ChiTietHoaDon({
        MaHD: hoadon._id,
        MaPhong: hoadon.MaPhong,
      }).save();
      
      // Change room status to be reserved
      await Phong.findByIdAndUpdate(hoadon.MaPhong, {TrangThai: 1});      

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

  cancelBill: async (req, res) => {
    try {
      const hoaDonId = req.params.id;

      await HoaDon.findByIdAndUpdate(hoaDonId, 
      {
        TrangThai: 0,
      })

      await Phong.findByIdAndUpdate(hoaDonId, {TrangThai: 0});

      return res.status(200).json('Cancel bill successfully')
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },
}

module.exports = hoaDonController