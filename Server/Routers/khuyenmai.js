// const khachSanController = require("../controllers/khachSanController");
const middlewareController = require("../controllers/middlewareController");

const khuyenMaiController = require("../controllers/khuyenMaiController");

const router = require("express").Router();

//Create
router.post("/api/khuyen-mai", khuyenMaiController.createPromotion);

//GET ALL USERS
router.get("/api/khuyen-mai", khuyenMaiController.getAllPromotion);

//GET BY ID
router.get("/api/khuyen-mai", khuyenMaiController.getPromotionById);

// Update
router.put("/api/khuyen-mai", khuyenMaiController.updatePromotion);

//DELETE Promotion
//v1/user/2313123
router.delete(
  "/api/khuyen-mai:id",
  middlewareController.verifyTokenAndAminAuth,
  khuyenMaiController.deletePromotion
);

module.exports = router;
