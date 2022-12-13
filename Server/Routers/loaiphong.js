const loaiPhongController = require('../controllers/loaiPhongController')
const middlewareController = require('../controllers/middlewareController')

const router = require('express').Router()

//GET ALL USERS
router.get(
  '/loaiphong',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.getAllTypeRoom,
)

//GET ALL USERS
router.get(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.createTypeRoom,
)

//GET BY ID
router.get(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.getTypeRoomById,
)

// Update
router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.updateTypeRoom,
)

//DELETE Promotion
//v1/user/2313123
router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.deleteTypeRoom,
)

module.exports = router
