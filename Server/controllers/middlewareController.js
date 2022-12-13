const jwt = require('jsonwebtoken')
const TaiKhoan = require('../models/TaiKhoan')

const middlewareController = {
  verifyToken: (req, res, next) => {
    const token = req.headers['token']

    if (token == null) return res.status(403).json('Access token is required')

    jwt.verify(token, 'Thanhtin4401', async (err, tokenInfo) => {
      if (err) return res.status(401).json("You're not authenticated")
      req.user = await TaiKhoan.findById(tokenInfo.id)
      next()
    })
  },

  verifyTokenAndAminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      const token = req.headers['token']

      jwt.verify(token, 'Thanhtin4401', async (err, tokenInfo) => {
        if (err) return res.status(401).json("You're not authenticated")
        const user = await TaiKhoan.findById(tokenInfo.id)

        if (user.QuyenHang === 'admin') {
          next()
        } else {
          res.status(403).json({
            message: "You're not allowed to do this action",
            user: user,
          })
        }
      })
    })
  },
}
module.exports = middlewareController
