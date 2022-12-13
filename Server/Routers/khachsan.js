const khachSanController = require('../controllers/khachSanController')
const middlewareController = require('../controllers/middlewareController')

const router = require('express').Router()

router.get(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.getAllHotels,
)

router.get(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.getHotelById,
)

router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.createHotel,
)

router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.updateHotel,
)

router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.deleteHotel,
)

module.exports = router
