const router = require("express").Router();
const houseController = require("../../controllers/houseController");

// Matches with "/api/house"
router
  .route("/register")
  // .get(houseController.findAll)
  .post(houseController.create);
//we need to fix this because the id won't be shown....
// house will be passed through as a header
// Matches with "/api/house/:id"
router
  .route("/:id")
  .get(houseController.findById)
  .put(houseController.update)
  .delete(houseController.remove);

module.exports = router;
