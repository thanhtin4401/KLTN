// const Room = require("../models/Room");

const khuyenMai = require("../models/KhuyenMai");
const khuyenMaiController = {
  // create Promotion
  createPromotion: async (req, res) => {
    try {
      const newPromotion = await new khuyenMai({
        type: req.body.type,
        city: req.body.city,
        addresss: req.body.address,
        distance: req.body.distance,
      });
      //save to DB
      const promotion = await newPromotion.save();
      res.status(200).json(promotion);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get all promotion
  getAllPromotion: async (req, res, next) => {
    try {
      const khuyenMais = await khuyenMai.find();
      res.status(200).json(khuyenMais);
    } catch (err) {
      next(err);
    }
  },

  // get promotion by id
  getPromotionById: async (req, res, next) => {
    try {
      const promotion = await khuyenMai.findById(req.params.id);
      res.status(200).json(promotion);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update promotion
  updatePromotion: async (req, res) => {
    try {
      const updatePromotion = await khuyenMai.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updatePromotion);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete Promotion
  deletePromotion: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const promotion = await khuyenMai.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // createHotels: async (req, res) => {
  //   try {
  //     const newHotel = await new Hotel({
  //       type: req.body.type,
  //       city: req.body.city,
  //       addresss: req.body.address,
  //       distance: req.body.distance,
  //       photos: req.body.photos,
  //       title: req.body.title,
  //       desc: req.body.desc,
  //       rating: req.body.rating,
  //       rooms: req.body.rooms,
  //       cheapestPrice: req.body.cheapestPrice,
  //     });
  //     //save to DB
  //     const hotel = await newHotel.save();
  //     res.status(200).json(hotel);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
  // //UPDATE HOTEL
  // updateHotel: async (req, res) => {
  //   try {
  //     const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
  //       $set: req.body,
  //     });
  //     res.status(200).json(updateHotel);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
  // //GET ALL USERS
  // getAllHotel: async (req, res) => {
  //   try {
  //     // find giup tra ve tat ca file cua user
  //     const hotel = await Hotel.find();
  //     res.status(200).json(hotel);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
  // // DELETE
  // deleteHotel: async (req, res) => {
  //   try {
  //     res.status(200).json("Delete successfully");
  //     const hotel = await User.findByIdAndDelete(req.params.id);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
  // // FIND HOTEL
  // getHotel: async (req, res) => {
  //   try {
  //     const hotel = await Hotel.findById(req.params.id);
  //     res.status(200).json(hotel);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },

  // // GET ROOM AT HOTEL
  // getHotelRooms: async (req, res, next) => {
  //   try {
  //     const hotel = await Hotel.findById(req.params.id);
  //     const list = await Promise.all(
  //       hotel.rooms.map((room) => {
  //         return Room.findById(room);
  //       })
  //     );
  //     res.status(200).json(list);
  //   } catch (err) {
  //     next(err);
  //   }
  // },

  // // GET COUNTBYCITY
  // countByCity: async (req, res, next) => {
  //   const cities = req.query.cities.split(",");
  //   try {
  //     const list = await Promise.all(
  //       cities.map((city) => {
  //         return Hotel.countDocuments({ city: city });
  //       })
  //     );
  //     res.status(200).json(list);
  //   } catch (err) {
  //     next(err);
  //   }
  // },
  // // GET COUNTBYTYPE
  // countByType: async (req, res, next) => {
  //   try {
  //     const hotelCount = await Hotel.countDocuments({ type: "hotel" });
  //     const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
  //     const resortCount = await Hotel.countDocuments({ type: "resort" });
  //     const villaCount = await Hotel.countDocuments({ type: "villa" });
  //     const cabinCount = await Hotel.countDocuments({ type: "cabin" });

  //     res.status(200).json([
  //       { type: "hotel", count: hotelCount },
  //       { type: "apartments", count: apartmentCount },
  //       { type: "resorts", count: resortCount },
  //       { type: "villas", count: villaCount },
  //       { type: "cabins", count: cabinCount },
  //     ]);
  //   } catch (err) {
  //     next(err);
  //   }
  // },
};

module.exports = khuyenMaiController;
