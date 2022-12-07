// const khachSanController = require("../controllers/khachSanController");
// const middlewareController = require("../controllers/middlewareController");

const khuyenMaiController = require("../controllers/khuyenMaiController");

const router = require("express").Router();

//GET ALL USERS
router.get("/", khuyenMaiController.getAllPromotion);

//DELETE USER
//v1/user/2313123
// router.delete(
//   "/:id",
//   middlewareController.verifyTokenAndAminAuth,
//   userController.deleteUser
// );

module.exports = router;
