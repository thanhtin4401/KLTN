const middlewareController = require('../controllers/middlewareController')

const khuVucController = require('../controllers/khuVucController')

const router = require('express').Router()

//GET ALL USERS
router.get('/', khuVucController.getAllLocation)
//GET BY ID
router.get('/:id', khuVucController.getLocationById)

// CREATE
router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.createLocation,
)

// UPDATE
router.put(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.updateLocation,
)

//DELETE
router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.deleteLocation,
)

module.exports = router
