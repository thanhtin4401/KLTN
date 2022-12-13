const DichVu = require('../models/DichVu')
const DichVuPhong = require('../models/DichVuPhong')
const Phong = require('../models/Phong')

const dichVuController = {
  getAllService: async (req, res, next) => {
    try {
      return res.status(200).json(await DichVu.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  getServiceById: async (req, res, next) => {
    try {
      const dichvu = await DichVu.findById(req.params.id)

      if (!dichvu) {
        return res.status(300).json('No Service found')
      }

      return res.status(200).json(dichvu)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  createService: async (req, res) => {
    try {
      const dichvu = await new DichVu(req.body).save()
      return res.status(200).json(dichvu)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  updateService: async (req, res) => {
    try {
      const dichvu = await DichVu.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      return res.status(200).json(dichvu)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

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

      return res.status(200).json('Delete successfully')
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },
}

module.exports = dichVuController
