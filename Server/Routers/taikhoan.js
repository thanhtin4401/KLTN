const authController = require('../controllers/taikhoanController')
const middlewareController = require('../controllers/middlewareController')

const router = require('express').Router()
router
  .get('/', authController.getAllUsers)
  .put('/', authController.updateAccount)

router.post('/register', authController.registerUser)
router.post('/login', authController.loginUser)

router.post(
  '/logout',
  middlewareController.verifyToken,
  authController.userLogout,
)

router.delete('/:id', authController.deleteAccount)

module.exports = router
