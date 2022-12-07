const hoaDonController = require("../controllers/hoaDonController");
const khachHangController = require("../controllers/khachHangController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/", hoaDonController.getAllBill);

//DELETE USER
//v1/user/2313123
// router.delete(
//   "/:id",
//   middlewareController.verifyTokenAndAminAuth,
//   userController.deleteUser
// );

module.exports = router;
