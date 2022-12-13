const NhanVien = require('../models/NhanVien')
const TaiKhoan = require('../models/TaiKhoan')

// const Room = require("../models/Room");
const nhanVienController = {
  getAllEmloyees: async (req, res, next) => {
    try {
      res.status(200).json(await NhanVien.find())
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  getEmployeeById: async (req, res, next) => {
    try {
      res.status(200).json(await NhanVien.findById(req.params.id))
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  createEmployee: async (req, res) => {
    try {
      const nhanvien = await new NhanVien(req.body).save()
      res.status(200).json(nhanvien)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const nhanvien = await NhanVien.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).json(nhanvien)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const nhanvien = await NhanVien.findById(req.params.id)

      await TaiKhoan.find({ _id: nhanvien.MaTaiKhoan }).deleteOne()

      nhanvien.delete()

      res.status(200).json('Delete successfully')
    } catch (err) {
      res.status(403).json(err.message)
    }
  },
}

module.exports = nhanVienController
