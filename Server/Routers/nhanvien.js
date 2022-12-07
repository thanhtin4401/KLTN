const middlewareController = require("../controllers/middlewareController");
const nhanVienController = require("../controllers/nhanVienController");

const router = require("express").Router();

//GET ALL USERS
router.get("/", nhanVienController.getAllEmloyee);

//DELETE USER
//v1/user/2313123
// router.delete(
//   "/:id",
//   middlewareController.verifyTokenAndAminAuth,
//   userController.deleteUser
// );

module.exports = router;
