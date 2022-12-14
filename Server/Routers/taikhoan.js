const authController = require('../controllers/taikhoanController')
const middlewareController = require('../controllers/middlewareController')

const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'assets/img/taikhoan')
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname)
  },
})

const upload = multer({ storage: storage })

const router = require('express').Router()
router
  .get('/', authController.getAllUsers)
  .put('/:taikhoan', upload.single('image'), authController.updateAccount)

router.post('/register', authController.registerUser)
router.post('/login', authController.loginUser)

router.post(
  '/logout',
  middlewareController.verifyToken,
  authController.userLogout,
)

router.delete('/:id', authController.deleteAccount)

module.exports = router
