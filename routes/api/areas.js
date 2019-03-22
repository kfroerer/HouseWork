const router = require("express").Router();
const AreaController = require("../../controllers/AreaController");

// Matches with "/api/books"
router
  .route("/")
  .get(AreaController.findAll)
  .post(AreaController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(AreaController.findById)
  .put(AreaController.update)
  .delete(AreaController.remove);

module.exports = router;
