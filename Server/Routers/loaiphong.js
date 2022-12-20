const loaiPhongController = require('../controllers/loaiPhongController')
const middlewareController = require('../controllers/middlewareController')
const router = require('express').Router()

router.get(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.getAllTypeRooms,
)

router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.createTypeRoom,
)

router.get(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.getTypeRoomById,
)

router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.updateTypeRoom,
)

router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.deleteTypeRoom,
)

module.exports = router
