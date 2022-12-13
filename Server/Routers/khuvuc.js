const middlewareController = require('../controllers/middlewareController')

const khuVucController = require('../controllers/khuVucController')

const router = require('express').Router()

router.get('/', khuVucController.getAllLocation)
router.get('/:id', khuVucController.getLocationById)

router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.createLocation,
)

router.put(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.updateLocation,
)

router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.deleteLocation,
)

module.exports = router
