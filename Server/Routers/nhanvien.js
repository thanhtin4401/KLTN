const middlewareController = require('../controllers/middlewareController')
const nhanVienController = require('../controllers/nhanVienController')

const router = require('express').Router()

// GET ALL USERS
router.get('/', nhanVienController.getAllEmloyees)
// GET BY ID
router.get('/:id', nhanVienController.getEmployeeById)

// CREATE
router.post(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  nhanVienController.createEmployee,
)

// UPDATE
router.put(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  nhanVienController.updateEmployee,
)

// DELETE
router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  nhanVienController.deleteEmployee,
)

module.exports = router
