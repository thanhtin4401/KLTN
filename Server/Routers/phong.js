const phongController = require('../controllers/phongController')
const middlewareController = require('../controllers/middlewareController.js')
const router = require('express').Router()

router.get('/', phongController.getAllRooms)
router.get('/:id', phongController.getRoomById)

router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  phongController.createRoom,
)

router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  phongController.updateRoom,
)

router.delete(
  '/delete/:id',
  middlewareController.verifyTokenAndAminAuth,
  phongController.deleteRoom,
)

module.exports = router
