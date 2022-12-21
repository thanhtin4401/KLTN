const hoaDonController = require('../controllers/hoaDonController')
const middlewareController = require('../controllers/middlewareController')

const router = require('express').Router()

router.get('/', hoaDonController.getAllBills)
router.get('/:id', hoaDonController.getBillById)

router.post(
  '/',
  middlewareController.verifyTokenAndUserAuth,
  hoaDonController.createBill,
)

router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  hoaDonController.updateBill,
)

router.put(
  '/:id/huy',
  middlewareController.verifyTokenAndUserAuth,
  hoaDonController.cancelBill,
)

module.exports = router
