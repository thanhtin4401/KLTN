const KhuVuc = require('../models/KhuVuc')

const khuVucController = {
  getAllLocation: async (req, res, next) => {
    try {
      return res.status(200).json(await KhuVuc.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  getLocationById: async (req, res, next) => {
    try {
      const khuVuc = await KhuVuc.findById(req.params.id)

      if (!khuVuc) {
        return res.status(300).json('No Location found')
      }

      return res.status(200).json(khuVuc)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  createLocation: async (req, res) => {
    try {
      const khuVuc = await new KhuVuc(req.body).save()
      return res.status(200).json(khuVuc)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  // update Location
  updateLocation: async (req, res) => {
    try {
      const khuvuc = await KhuVuc.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      return res.status(200).json(khuvuc)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  deleteLocation: async (req, res) => {
    try {
      await KhuVuc.findByIdAndDelete(req.params.id)

      return res.status(200).json('Delete successfully')
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },
}

module.exports = khuVucController
