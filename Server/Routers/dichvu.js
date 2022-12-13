const dichVuController = require('../controllers/dichVuController')
const middlewareController = require('../controllers/middlewareController')

const router = require('express').Router()

//GET ALL USERS
router.get('/', dichVuController.getAllService)
//GET BY ID
router.get('/:id', dichVuController.getServiceById)

// CREATE
router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  dichVuController.createService,
)

// UPDATE
router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  dichVuController.updateService,
)

//DELETE
router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  dichVuController.deleteService,
)

module.exports = router
