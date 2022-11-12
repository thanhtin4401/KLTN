const roomController = require("../controllers/roomController");
const middlewareController = require("../controllers/middlewareController.js");
const router = require("express").Router();
//CREATE
router.post(
  "/createRoom/:hotelid",
  // middlewareController.verifyTokenAndAminAuth,
  roomController.createRoom
);

//UPDATE
router.put("updateRoom/availability/:id");
router.put(
  "/:id",
  middlewareController.verifyTokenAndAminAuth,
  roomController.updateRoom
);
//DELETE
router.delete(
  "/deleteRoom/:id/:hotelid",
  // middlewareController.verifyTokenAndAminAuth,
  roomController.deleteRoom
);
//GET

router.get("/:id", roomController.getRoom);
//GET ALL

router.get("/", roomController.getRooms);

module.exports = router;
