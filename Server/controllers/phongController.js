const Phong = require("../models/Phong");
const KhachSan = require("../models/KhachSan");
const DichVu = require("../models/DichVu");
const DichVuPhong = require("../models/DichVuPhong");
const LoaiPhong = require("../models/LoaiPhong");
const fs = require('fs').promises;

const imageBasePath = "img/phong/";

const roomController = {
  getAllRooms: async (req, res, next) => {
    try {
      return res.status(200).json(await Phong.find());
    } catch (err) {
      return res.status(403).json(err.message);
    }
  },

  getRoomById: async (req, res, next) => {
    try {
      const phong = await Phong.findById(req.params.id);

      if (!phong) {
        return res.status(300).json("No Room found");
      }

      const loaiPhong = await LoaiPhong.findById(phong.MaLoaiPhong);

      return res.status(200).json({
        phong: phong,
        loaiPhong: loaiPhong,
      });
    } catch (err) {
      return res.status(403).json(err.message);
    }
  },

  createRoom: async (req, res, next) => {
    try {
      const phong = new Phong(req.body);

      if (req.file) {
        phong.HinhAnh = {
            url: imageBasePath + req.file.filename,
            filename: req.file.path,
        } 
      }

      await phong.save();

      // Add dichvu to phong
      const dichVu = await DichVu.find({
        TenDichVu: { $in: req.body.TenDichVu },
      });
      dichVu.forEach(async (dv) => {
        await new DichVuPhong({
          MaDichVu: dv._id,
          MaPhong: phong._id,
        }).save();
      });

      await KhachSan.findByIdAndUpdate(phong.MaKhachSan, {
        $push: { MaPhong: phong._id },
      });

      return res.status(200).json(await Phong.findById(phong._id));
    } catch (err) {
      return res.status(403).json(err.message);
    }
  },

  updateRoom: async (req, res, next) => {
    try {
      const updatedRoom = await Phong.findByIdAndUpdate(
        req.params.id,
        { $set: req.body.Phong },
        { new: true }
      );
      
      let error = undefined;
      await fs.unlink(updatedRoom.HinhAnh.filename)
      .then(() => {console.log("Delete old image successfully!")})
      .catch(err => {error = err;});

      if (error) {        
        return res.status(403).json({message: err.message});
      }

      if (req.file) {
        updatedRoom.HinhAnh = {
            url: imageBasePath + req.file.filename,
            filename: req.file.path,
        } 
      }

      await updatedRoom.save();

      return res.status(200).json(updatedRoom);
    } catch (err) {
      return res.status(403).json(err.message);
    }
  },

  // updateRoom avilability
  updateRoomAvailability: async (req, res, next) => {
    try {
      await Phong.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates,
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      res.status(403).json(err.message);
    }
  },

  // deleteRoom
  deleteRoom: async (req, res, next) => {
    try {
      const phong = await Phong.findById(req.params.id);

      if (!phong) {
        return res.status(300).json("No Room found");
      }

      await KhachSan.findByIdAndUpdate(phong.MaKhachSan, {
        $pull: { rooms: req.params.id },
      });

      await phong.delete();

      return res.status(200).json("Room has been deleted.");
    } catch (err) {
      return res.status(403).json(err.message);
    }
  },
};

module.exports = roomController;
