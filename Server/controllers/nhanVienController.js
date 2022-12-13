const NhanVien = require('../models/NhanVien')
const TaiKhoan = require('../models/TaiKhoan')

const nhanVienController = {
  getAllEmloyees: async (req, res, next) => {
    try {
      return res.status(200).json(await NhanVien.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  getEmployeeById: async (req, res, next) => {
    try {
      const nhanvien = await NhanVien.findById(req.params.id)

      if (!nhanvien) {
        return res.status(300).json('No Employee found')
      }

      return res.status(200).json(nhanvien)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  createEmployee: async (req, res) => {
    try {
      const nhanvien = await new NhanVien(req.body).save()
      return res.status(200).json(nhanvien)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const nhanvien = await NhanVien.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })

      return res.status(200).json(nhanvien)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const nhanvien = await NhanVien.findById(req.params.id)

      await TaiKhoan.find({ _id: nhanvien.MaTaiKhoan }).deleteOne()

      nhanvien.delete()

      return res.status(200).json('Delete successfully')
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },
}

module.exports = nhanVienController
