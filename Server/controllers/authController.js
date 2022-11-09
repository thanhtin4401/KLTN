const bcrypt = require("bcrypt");
const User = require("../models/User");
// const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
var jwt = require("jsonwebtoken");
const authController = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
        role: req.body.role,
      });
      //save to DB
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //LOGIN
  loginUser: async (req, res) => {
    try {
      //find one tim kiem
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        res.status(404).json("wrone usename");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).json("wrong password");
      }
      if (user && validPassword) {
        const accessToken = jwt.sign(
          {
            id: user.id,
            role: user.role,
          },

          "Thanhtin4401",
          { expiresIn: "365d" }
        );
        // es6 tra ve het ngoai tru password
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //  LOG Out
  userLogout: async (req, res) => {
    res.status(200).json("Logged out successfull");
  },
};
module.exports = authController;
