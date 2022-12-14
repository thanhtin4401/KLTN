const middlewareController = require('../controllers/middlewareController')
const khuVucController = require('../controllers/khuVucController')
const router = require('express').Router()

const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'assets/img/khuvuc')
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname)
  },
})

const upload = multer({ storage: storage })

router.get('/', khuVucController.getAllLocation)
router.get('/:id', khuVucController.getLocationById)

router.post(
  '/',
  upload.array('image'),
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.createLocation,
)

router.put(
  '/',
  upload.array('image'),
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.updateLocation,
)

router.delete(
  '/:id',
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.deleteLocation,
)

router.get('/seed', khuVucController.seedLocation);

module.exports = router
