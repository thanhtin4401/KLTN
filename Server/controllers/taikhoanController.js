const bcrypt = require('bcrypt')
const TaiKhoan = require('../models/TaiKhoan')

const dotenv = require('dotenv')
dotenv.config()
var jwt = require('jsonwebtoken')

const authController = {
  getAllUsers: async (req, res) => {
    try {
      return res.status(200).json(await TaiKhoan.find())
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(req.body.MatKhau, salt)
      const newAccount = new TaiKhoan({
        TenTaiKhoan: req.body.TenTaiKhoan,
        TaiKhoan: req.body.TaiKhoan,
        MatKhau: hashed,
        HinhAnh: req.body.HinhAnh | '',
        QuyenHang: req.body.QuyenHang | '',
      }).save()

      return res.status(200).json(newAccount)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },

  loginUser: async (req, res) => {
    try {
      const account = await TaiKhoan.findOne({ TaiKhoan: req.body.TaiKhoan })
      if (!account) {
        return res.status(404).json('wrong username')
      }

      const validPassword = await bcrypt.compare(
        req.body.MatKhau,
        account.MatKhau,
      )
      if (!validPassword) {
        return res.status(404).json('wrong password')
      }

      if (account && validPassword) {
        const accessToken = jwt.sign(
          {
            id: account.id,
            QuyenHang: account.QuyenHang,
          },
          'Thanhtin4401',
          { expiresIn: '365d' },
        )
        // es6 tra ve het ngoai tru password
        const { MatKhau, ...others } = account._doc
        return res.status(200).json({ ...others, accessToken })
      }
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  userLogout: async (req, res) => {
    return res.status(200).json('Logged out successfull')
  },

  updateAccount: async (req, res) => {
    try {
      const updateAccount = await TaiKhoan.findOneAndUpdate(
        { TaiKhoan: req.body.TaiKhoan },
        {
          $set: req.body,
        },
      )
      return res.status(200).json(updateAccount)
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },

  deleteAccount: async (req, res) => {
    try {
      await TaiKhoan.findByIdAndDelete(req.params.id)
      return res.status(200).json('Delete successfully')
    } catch (err) {
      return res.status(403).json(err.message)
    }
  },
}
module.exports = authController
