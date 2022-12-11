const loaiPhongController = require("../controllers/loaiPhongController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/api/loai-phong", loaiPhongController.getAllTypeRoom);

//GET ALL USERS
router.get("/api/loai-phong", loaiPhongController.createTypeRoom);

//GET BY ID
router.get("/api/loai-phong", loaiPhongController.getTypeRoomById);

// Update
router.put("/api/loai-phong", loaiPhongController.updateTypeRoom);

//DELETE Promotion
//v1/user/2313123
router.delete(
  "/api/khuyen-mai:id",
  middlewareController.verifyTokenAndAminAuth,
  loaiPhongController.deleteTypeRoom
);

module.exports = router;
