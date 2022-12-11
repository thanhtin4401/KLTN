const bcrypt = require("bcrypt");
const User = require("../models/User");
// const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
var jwt = require("jsonwebtoken");
const Hotel = require("../models/KhachSan");
const Room = require("../models/Room");
const hotelController = {
  //CREATE
  createHotels: async (req, res) => {
    try {
      const newHotel = await new Hotel({
        TenKhuyenMai: req.body.TenKhuyenMai,
        ChiecKhau: req.body.ChiecKhau,
        MoTa: req.body.MoTa,
      });
      //save to DB
      const hotel = await newHotel.save();
      res.status(200).json(hotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //UPDATE HOTEL
  updateHotel: async (req, res) => {
    try {
      const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateHotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL USERS
  getAllHotel: async (req, res) => {
    try {
      // find giup tra ve tat ca file cua user
      const hotel = await Hotel.find();
      res.status(200).json(hotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // DELETE
  deleteHotel: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const hotel = await User.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // FIND HOTEL
  getHotel: async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET ROOM AT HOTEL
  getHotelRooms: async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  },

  // GET COUNTBYCITY
  countByCity: async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  },
  // GET COUNTBYTYPE
  countByType: async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });

      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = hotelController;
