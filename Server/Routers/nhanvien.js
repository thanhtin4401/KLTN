const middlewareController = require('../controllers/middlewareController')
const nhanVienController = require('../controllers/nhanVienController')

const router = require('express').Router()

router.get('/', nhanVienController.getAllEmloyees)
router.get('/:id', nhanVienController.getEmployeeById)

router.post(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  nhanVienController.createEmployee,
)

router.put(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  nhanVienController.updateEmployee,
)

router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  nhanVienController.deleteEmployee,
)

module.exports = router
