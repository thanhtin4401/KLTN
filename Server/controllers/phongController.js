const Phong = require('../models/Phong')
const KhachSan = require('../models/KhachSan')

const roomController = {
  getAllRooms: async (req, res, next) => {
    try {
      return res.status(200).json(await Phong.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  getRoomById: async (req, res, next) => {
    try {
      const room = await Phong.findById(req.params.id)
      
      if (!room) {
        return res.status(300).json("No Room found");
      }

      return res.status(200).json(room)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  createRoom: async (req, res, next) => {
    try {
      const phong = await new Phong(req.body).save()

      await KhachSan.findByIdAndUpdate(phong.MaKhachSan, {
        $push: { MaPhong: phong._id },
      })

      return res.status(200).json(phong)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  updateRoom: async (req, res, next) => {
    try {
      const updatedRoom = await Phong.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true },
      )

      return res.status(200).json(updatedRoom)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  // updateRoom avilability
  updateRoomAvailability: async (req, res, next) => {
    try {
      await Phong.updateOne(
        { 'roomNumbers._id': req.params.id },
        {
          $push: {
            'roomNumbers.$.unavailableDates': req.body.dates,
          },
        },
      )
      res.status(200).json('Room status has been updated.')
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // deleteRoom
  deleteRoom: async (req, res, next) => {
    try {
      const phong = await Phong.findById(req.params.id)

      if (!phong) {
        return res.status(300).json("No Room found");
      }

      await KhachSan.findByIdAndUpdate(phong.MaKhachSan, {
        $pull: { rooms: req.params.id },
      })

      phong.delete()

      return res.status(200).json('Room has been deleted.')
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },
}

module.exports = roomController
