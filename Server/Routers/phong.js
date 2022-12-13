const roomController = require('../controllers/roomController')
const middlewareController = require('../controllers/middlewareController.js')
const router = require('express').Router()

//GET
router.get('/:id', roomController.getRoom)
//GET ALL
router.get('/', roomController.getRooms)

//CREATE
router.post(
  '/create/:maKhachSan',
  middlewareController.verifyTokenAndAminAuth,
  roomController.createRoom,
)

//UPDATE
router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  roomController.updateRoom,
)

//DELETE
router.delete(
  '/delete/:id',
  middlewareController.verifyTokenAndAminAuth,
  roomController.deleteRoom,
)

module.exports = router
