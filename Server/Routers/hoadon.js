const hoaDonController = require('../controllers/hoaDonController')
const middlewareController = require('../controllers/middlewareController')

const router = require('express').Router()

router.get('/', hoaDonController.getAllBills)
router.get('/:id', hoaDonController.getBillById)

router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  hoaDonController.createBill,
)

router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  hoaDonController.updateBill,
)

router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  hoaDonController.deleteBill,
)

module.exports = router
