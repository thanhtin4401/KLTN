const khachSanController = require("../controllers/khachSanController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/api/khach-san", khachSanController.getAllHotel);

//Create
router.post("/api/khach-san", khachSanController.createHotel);

//GET BY ID
router.get("/api/khach-san", khachSanController.getAllHotel);

// Update
router.put("/api/khach-san", khachSanController.updateHotel);

//DELETE Promotion
//v1/user/2313123
router.delete(
  "/api/khuyen-mai:id",
  middlewareController.verifyTokenAndAminAuth,
  khachSanController.deleteHotel
);

module.exports = router;
