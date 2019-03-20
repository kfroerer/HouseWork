const router = require("express").Router();
const TaskController = require("../../controllers/TaskController");

// Matches with "/api/books"
router
  .route("/")
  .get(TaskController.findAll)
  .post(TaskController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(TaskController.findById)
  .put(TaskController.update)
  .delete(TaskController.remove);

module.exports = router;
