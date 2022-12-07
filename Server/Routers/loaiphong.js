const loaiPhongController = require("../controllers/loaiPhongController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/", loaiPhongController.getAllTypeRoom);

//DELETE USER
//v1/user/2313123
// router.delete(
//   "/:id",
//   middlewareController.verifyTokenAndAminAuth,
//   userController.deleteUser
// );

module.exports = router;
