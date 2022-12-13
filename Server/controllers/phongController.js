const Phong = require('../models/Phong')
const KhachSan = require('../models/KhachSan')

const roomController = {
  // get room
  getRoom: async (req, res, next) => {
    try {
      const room = await Phong.findById(req.params.id)
      res.status(200).json(room)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // get room
  getRooms: async (req, res, next) => {
    try {
      const rooms = await Phong.find()
      res.status(200).json(rooms)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // add room
  createRoom: async (req, res, next) => {
    const hotelId = req.params.hotelid
    const newRoom = new Phong(req.body)

    try {
      const savedRoom = await newRoom.save()

      await KhachSan.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      })

      res.status(200).json(savedRoom)
    } catch (err) {
      res.status(403).json(err.message)
    }
  },

  // update room
  updateRoom: async (req, res, next) => {
    try {
      const updatedRoom = await Phong.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true },
      )
      res.status(200).json(updatedRoom)
    } catch (err) {
      res.status(403).json(err.message)
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

      await KhachSan.findByIdAndUpdate(phong.MaKhachSan, {
        $pull: { rooms: req.params.id },
      })

      phong.delete()

      res.status(200).json('Room has been deleted.')
    } catch (err) {
      res.status(403).json(err.message)
    }
  },
}

module.exports = roomController
