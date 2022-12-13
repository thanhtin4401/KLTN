const middlewareController = require('../controllers/middlewareController')
const khuyenMaiController = require('../controllers/khuyenMaiController')

const router = require('express').Router()

router.get('/', khuyenMaiController.getAllPromotions)
router.get('/:id', khuyenMaiController.getPromotionById)

router.post(
  '/',
  middlewareController.verifyTokenAndAminAuth,
  khuyenMaiController.createPromotion,
)

router.put(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khuyenMaiController.updatePromotion,
)

router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khuyenMaiController.deletePromotion,
)

module.exports = router
