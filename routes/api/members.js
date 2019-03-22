const router = require("express").Router();
const MemberController = require("../../controllers/MemberController");

// Matches with "/api/books"
router
  .route("/")
  .get(MemberController.findAll)
  .post(MemberController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(MemberController.findById)
  .put(MemberController.update)
  .delete(MemberController.remove);

module.exports = router;
