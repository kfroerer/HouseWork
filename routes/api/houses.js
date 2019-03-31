const router = require("express").Router();
const houseController = require("../../controllers/houseController");

// Matches with "/api/house"
router
  .route("/")
  .get(houseController.findAll)
  .post(houseController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(houseController.findById)
  .put(houseController.update)
  .delete(houseController.remove);

module.exports = router;
