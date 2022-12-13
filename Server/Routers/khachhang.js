const khachHangController = require('../controllers/khachHangController')
const middlewareController = require('../controllers/middlewareController')

const router = require('express').Router()

router.get('/', khachHangController.getAllCustomers)
router.get('/:id', khachHangController.getCustomerById)

router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khachHangController.createCustomer,
)
router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khachHangController.updateCustomer,
)

router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khachHangController.deleteCustomer,
)

module.exports = router
