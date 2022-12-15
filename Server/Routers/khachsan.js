const khachSanController = require('../controllers/khachSanController')
const middlewareController = require('../controllers/middlewareController')
const router = require('express').Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'assets/img/khachsan')
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname)
  },
})

const upload = multer({ storage: storage })

router
  .get(
    '/',
    khachSanController.getAllHotels,
  )
  .post(
    '/',
    upload.array('image[]'),
    middlewareController.verifyTokenAndAminAuth,
    khachSanController.createHotel,
  )

router
  .get(
    '/:id',
    middlewareController.verifyTokenAndAminAuth,
    khachSanController.getHotelById,
  )
  .get('/:id/phong', khachSanController.getHotelRooms)
  .put(
    '/:id',
    middlewareController.verifyTokenAndAminAuth,
    khachSanController.updateHotel,
  )
  .delete(
    '/:id',
    middlewareController.verifyTokenAndAminAuth,
    khachSanController.deleteHotel,
  )


module.exports = router
