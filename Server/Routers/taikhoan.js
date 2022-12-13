const authController = require('../controllers/taikhoanController')
const middlewareController = require('../controllers/middlewareController')

const router = require('express').Router()
//REGISTER
router.post('/register', authController.registerUser)
//LOGIN
router.post('/login', authController.loginUser)
//LOG OUT
router.post(
  '/logout',
  middlewareController.verifyToken,
  authController.userLogout,
)

//GET BY ID
router.get('/', authController.getUsers)
router.put('/', authController.updateAccount)
// Delete
router.delete('/:id', authController.deleteAccount)

module.exports = router
