const hoaDonController = require("../controllers/hoaDonController");
const khachHangController = require("../controllers/khachHangController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/api/hoa-don", hoaDonController.getAllBill);

//Create
router.post("/api/hoa-don", hoaDonController.createBill);

//GET BY ID
router.get("/api/hoa-don", hoaDonController.getBillById);

// Update
router.put("/api/hoa-don", hoaDonController.updateBill);

//DELETE Promotion
//v1/user/2313123
router.delete(
  "/api/hoa-don/:id",
  middlewareController.verifyTokenAndAminAuth,
  hoaDonController.deleteBill
);

module.exports = router;
