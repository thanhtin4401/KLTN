const middlewareController = require("../controllers/middlewareController");
const nhanVienController = require("../controllers/nhanVienController");

const router = require("express").Router();

//GET ALL USERS
router.get("/api/nhan-vien", nhanVienController.getAllEmloyee);

//Create
router.post("/api/nhan-vien", nhanVienController.createEmployee);

//GET BY ID
router.get("/api/nhan-vien", nhanVienController.getEmployeeById);

// Update
router.put("/api/nhan-vien", nhanVienController.updateEmployee);

//DELETE Promotion
//v1/user/2313123
router.delete(
  "/api/khuyen-mai:id",
  middlewareController.verifyTokenAndAminAuth,
  nhanVienController.deleteEmployee
);

module.exports = router;
