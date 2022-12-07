const khachSanController = require("../controllers/khachSanController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/", khachSanController.getAllHotel);

//DELETE USER
//v1/user/2313123
// router.delete(
//   "/:id",
//   middlewareController.verifyTokenAndAminAuth,
//   userController.deleteUser
// );

module.exports = router;
