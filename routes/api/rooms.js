const router = require("express").Router();
const areaController = require("../../controllers/areaController");

// Matches with "/api/rooms"
router.route("/")
  .get(areaController.findAll)
  .post(areaController.create);

// Matches with "/api/rooms/:id/tasks"
router.route("/:id/tasks").get(areaController.findTasksByRoomId);

// Matches with "/api/rooms/:id"
router
  .route("/:id")
  .get(areaController.findById)
  .put(areaController.update)
  .delete(areaController.remove);

module.exports = router;
