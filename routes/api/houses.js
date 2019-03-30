const router = require("express").Router();
const houseController = require("../../controllers/houseController");
const db = require("../../models")
// Matches with "/api/house"
router
  .route("/register")
  .post(houseController.create) 

    
//we need to fix this because the id won't be shown....
// house will be passed through as a header
// Matches with "/api/house/:id"
router
  .route("/")
  .get(houseController.findById)
  .put(houseController.update)
  .delete(houseController.remove);

module.exports = router;


