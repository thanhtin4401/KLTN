const phongController = require('../controllers/phongController')
const middlewareController = require('../controllers/middlewareController.js')
const router = require('express').Router()

//GET
router.get('/:id', phongController.getRoom)
//GET ALL
router.get('/', phongController.getRooms)

//CREATE
router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  phongController.createRoom,
)

//UPDATE
router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  phongController.updateRoom,
)

//DELETE
router.delete(
  '/delete/:id',
  middlewareController.verifyTokenAndAminAuth,
  phongController.deleteRoom,
)

module.exports = router
