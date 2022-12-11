const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

//GET ALL USERS
router.get(
  "/api/tai-khoan",
  middlewareController.verifyToken,
  userController.getAllUsers
);

//DELETE USER
//v1/user/2313123
router.delete(
  "/api/tai-khoan:id",
  middlewareController.verifyTokenAndAminAuth,
  userController.deleteUser
);

module.exports = router;
