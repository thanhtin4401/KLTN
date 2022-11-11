const bcrypt = require("bcrypt");
const User = require("../models/User");
// const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
var jwt = require("jsonwebtoken");
const Hotel = require("../models/Hotel");
const hotelController = {
  //CREATE
  createHotels: async (req, res) => {
    try {
      const newHotel = await new Hotel({
        type: req.body.type,
        city: req.body.city,
        addresss: req.body.address,
        distance: req.body.distance,
        photos: req.body.photos,
        title: req.body.title,
        desc: req.body.desc,
        rating: req.body.rating,
        rooms: req.body.rooms,
        cheapestPrice: req.body.cheapestPrice,
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
};

module.exports = hotelController;
