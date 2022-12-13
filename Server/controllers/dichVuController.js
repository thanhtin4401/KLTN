const DichVu = require('../models/DichVu')
const DichVuPhong = require('../models/DichVuPhong')
const Phong = require('../models/Phong')

// const Room = require("../models/Room");
const dichVuController = {
  // get room
  getAllService: async (req, res, next) => {
    try {
      res.status(200).json(await DichVu.find())
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // get Service by id
  getServiceById: async (req, res, next) => {
    try {
      res.status(200).json(await DichVu.findById(req.params.id))
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  createService: async (req, res) => {
    try {
      const dichvu = await new DichVu(req.body).save()
      res.status(200).json(dichvu)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // update Service
  updateService: async (req, res) => {
    try {
      const dichvu = await DichVu.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).json(dichvu)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // delete Service
  deleteService: async (req, res) => {
    try {
      const dichvu = await DichVu.findById(req.params.id)

      await DichVuPhong.find({ MaDichVu: dichvu._id }, (err, arr) => {
        if (err) return res.status(403).json(err.message)

        arr.forEach(async (element) => {
          await Phong.find({ MaDichVuPhong: element._id }).deleteMany()
        })
      }).deleteMany()

      await dichvu.delete()

      res.status(200).json('Delete successfully')
    } catch (err) {
      res.status(403).json(err.message)
    }
  },
}

module.exports = dichVuController
