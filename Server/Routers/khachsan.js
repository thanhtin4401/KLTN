const khachSanController = require('../controllers/khachSanController')
const middlewareController = require('../controllers/middlewareController')

const router = require('express').Router()

//GET ALL USERS
router.get(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.getAllHotel,
)

//GET BY ID
router.get(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.getAllHotel,
)

//Create
router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.createHotel,
)

// Update
router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.updateHotel,
)

//DELETE Promotion
//v1/user/2313123
router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.deleteHotel,
)

module.exports = router
