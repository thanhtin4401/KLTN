const dichVuController = require("../controllers/dichVuController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/", dichVuController.getAllService);

//DELETE USER
//v1/user/2313123
// router.delete(
//   "/:id",
//   middlewareController.verifyTokenAndAminAuth,
//   userController.deleteUser
// );

module.exports = router;
