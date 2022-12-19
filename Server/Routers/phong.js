const phongController = require("../controllers/phongController");
const middlewareController = require("../controllers/middlewareController.js");
const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "assets/img/phong");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", phongController.getAllRooms);
router.get("/:id", phongController.getRoomById);

router.post(
  "/",
  upload.single("image"),
  middlewareController.verifyTokenAndAminAuth,
  phongController.createRoom
);

router.post(
  '/image/create', 
  upload.single("image"),
  middlewareController.verifyTokenAndAminAuth, 
  phongController.uploadImages
);

router.put(
  "/:id",
  upload.array("image[]"),
  middlewareController.verifyTokenAndAminAuth,
  phongController.updateRoom
);

router.delete(
  "/:id",
  middlewareController.verifyTokenAndAminAuth,
  phongController.deleteRoom
);

module.exports = router;
