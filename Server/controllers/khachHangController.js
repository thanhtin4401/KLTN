const KhachHang = require('../models/KhachHang')
const TaiKhoan = require('../models/TaiKhoan')

const khachHangController = {
  getAllCustomers: async (req, res, next) => {
    try {
      return res.status(200).json(await KhachHang.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  getCustomerById: async (req, res, next) => {
    try {
      const khachhang = await KhachHang.findById(req.params.id)

      if (!khachhang) {
        return res.status(300).json('Customer not found')
      }

      return res.status(200).json(khachhang)
    } catch (err) {
      return res.status(403).json(err)
    }
  },

  createCustomer: async (req, res) => {
    try {
      const khachhang = await new KhachHang(req.body).save()
      return res.status(200).json(khachhang)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  updateCustomer: async (req, res) => {
    try {
      const khachhang = await KhachHang.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      return res.status(200).json(khachhang)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  deleteCustomer: async (req, res) => {
    try {
      const khachhang = await KhachHang.findById(req.params.id)

      if (!khachhang) {
        return res.status(300).json('Customer not found')
      }

      await TaiKhoan.find({ _id: khachhang.MaTaiKhoan }).deleteOne()

      await khachhang.delete()

      return res.status(200).json('Delete successfully')
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },
}

module.exports = khachHangController
