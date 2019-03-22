const router = require("express").Router();
const taskController = require("../../controllers/TaskController");

// Matches with "/api/tasks"
router.route("/")
  .get(taskController.findAll)
  .post(taskController.create);

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);

module.exports = router;