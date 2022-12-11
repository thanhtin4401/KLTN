const middlewareController = require("../controllers/middlewareController");

const khuVucController = require("../controllers/khuVucController");

const router = require("express").Router();

//GET ALL USERS
router.get("/api/khu-vuc", khuVucController.getAllLocation);

//Create
router.post("/api/khu-vuc", khuVucController.createLocation);

//GET BY ID
router.get("/api/khu-vuc", khuVucController.getLocationById);

// Update
router.put("/api/khu-vuc", khuVucController.updateLocation);

//DELETE Promotion
//v1/user/2313123
router.delete(
  "/api/khu-vuc/:id",
  middlewareController.verifyTokenAndAminAuth,
  khuVucController.deleteLocation
);

module.exports = router;
