const dichVuController = require("../controllers/dichVuController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/api/dich-vu", dichVuController.getAllService);

//Create
router.post("/api/dich-vu", dichVuController.createService);

//GET BY ID
router.get("/api/dich-vu", dichVuController.getServiceById);

// Update
router.put("/api/dich-vu", dichVuController.updateService);

//DELETE Promotion
//v1/user/2313123
router.delete(
  "/api/khuyen-mai:id",
  middlewareController.verifyTokenAndAminAuth,
  dichVuController.deleteService
);
module.exports = router;
