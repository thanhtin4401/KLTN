const Phong = require('../models/Phong')
const KhachSan = require('../models/KhachSan')

const roomController = {
  // get room
  getRoom: async (req, res, next) => {
    try {
      const room = await Phong.findById(req.params.id)
      res.status(200).json(room)
    } catch (err) {
      next(err)
    }
  },

  // get room
  getRooms: async (req, res, next) => {
    try {
      const rooms = await Phong.find()
      res.status(200).json(rooms)
    } catch (err) {
      next(err)
    }
  },

  // add room
  createRoom: async (req, res, next) => {
    const maKhachSan = req.params.maKhachSan
    const newRoom = new Phong(req.body)

    try {
      const savedRoom = await newRoom.save()
      try {
        await KhachSan.findByIdAndUpdate(maKhachSan, {
          $push: { MaPhong: savedRoom._id },
        })
      } catch (err) {
        next(err)
      }
      res.status(200).json(savedRoom)
    } catch (err) {
      next(err)
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
      next(err)
    }
  },

  // TODO: Hoi lai TIN THANH
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
      next(err)
    }
  },

  // deleteRoom
  deleteRoom: async (req, res, next) => {
    try {
      const room = await Phong.findById(req.params.id)

      try {
        await KhachSan.findAndUpdate(room.MaKhachSan, {
          $pull: { rooms: req.params.id },
        })

        await Phong.findByIdAndDelete(rep.params.id)
      } catch (err) {
        next(err)
      }
      res.status(200).json('Room has been deleted successfully.')
    } catch (err) {
      next(err)
    }
  },
}

module.exports = roomController
