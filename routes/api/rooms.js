const router = require("express").Router();
const roomController = require("../../controllers/roomController");

// Matches with "/api/rooms"
router.route("/")
  .get(roomController.findAll)
  .post(roomController.create);

// Matches with "/api/rooms/:id"
router
  .route("/:id")
  .get(roomController.findById)
  .put(roomController.update)
  .delete(roomController.remove);

module.exports = router;
