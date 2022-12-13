const KhuVuc = require('../models/KhuVuc')

const khuVucController = {
  // get room
  getAllLocation: async (req, res, next) => {
    try {
      res.status(200).json(await KhuVuc.find())
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // get Location by id
  getLocationById: async (req, res, next) => {
    try {
      res.status(200).json(await KhuVuc.findById(req.params.id))
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  createLocation: async (req, res) => {
    try {
      const khuVuc = await new KhuVuc(req.body).save()
      res.status(200).json(khuVuc)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // update Location
  updateLocation: async (req, res) => {
    try {
      const khuvuc = await KhuVuc.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).json(khuvuc)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // delete Location
  deleteLocation: async (req, res) => {
    try {
      await KhuVuc.findByIdAndDelete(req.params.id)

      res.status(200).json('Delete successfully')
    } catch (err) {
      res.status(403).json(err.message)
    }
  },
}

module.exports = khuVucController
