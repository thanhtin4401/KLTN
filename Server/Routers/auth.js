const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();
//REGISTER
router.post("/register", authController.registerUser);
//LOGIN
router.post("/login", authController.loginUser);
//LOG OUT
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.userLogout
);

//GET BY ID
router.get("/api/tai-khoan", authController.updateAccount);

// Update
router.put("/api/tai-khoan", authController.deleteAccount);

module.exports = router;
