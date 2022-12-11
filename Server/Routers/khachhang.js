const khachHangController = require("../controllers/khachHangController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/api/khach-hang", khachHangController.getAllCustomer);

//Create
router.post("/api/khach-hang", khachHangController.createCustomer);

//GET BY ID
router.get("/api/khach-hang", khachHangController.getCustomerById);

// Update
router.put("/api/khach-hang", khachHangController.updateCustomer);

//DELETE Promotion
//v1/user/2313123
router.delete(
  "/api/khach-hang/:id",
  middlewareController.verifyTokenAndAminAuth,
  khachHangController.deleteCustomer
);

module.exports = router;
