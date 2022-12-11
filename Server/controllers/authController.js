const bcrypt = require("bcrypt");
const User = require("../models/User");
const TaiKhoan = require("../models/TaiKhoan");
// const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
var jwt = require("jsonwebtoken");
const authController = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.MatKhau, salt);
      const newAccount = await new TaiKhoan({
        TenTaiKhoan: req.body.TenTaiKhoan,
        TaiKhoan: req.body.TaiKhoan,
        MatKhau: hashed,
        HinhAnh: req.body.HinhAnh,
        QuyenHang: req.body.QuyenHang,
      });
      //save to DB
      const account = await newAccount.save();
      res.status(200).json(account);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //LOGIN
  loginUser: async (req, res) => {
    try {
      //find one tim kiem
      const account = await TaiKhoan.findOne({ TaiKhoan: req.body.TaiKhoan });
      if (!account) {
        res.status(404).json("wrone usename");
      }
      const validPassword = await bcrypt.compare(
        req.body.MatKhau,
        account.MatKhau
      );
      if (!validPassword) {
        res.status(404).json("wrong password");
      }
      if (account && validPassword) {
        const accessToken = jwt.sign(
          {
            id: account.id,
            QuyenHang: account.QuyenHang,
          },

          "Thanhtin4401",
          { expiresIn: "365d" }
        );
        // es6 tra ve het ngoai tru password
        const { MatKhau, ...others } = account._doc;
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

  // update Account
  updateAccount: async (req, res) => {
    try {
      const updateAccount = await TaiKhoan.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateAccount);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete Account
  deleteAccount: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const Account = await TaiKhoan.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = authController;
