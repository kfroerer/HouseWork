const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/auth"
router
  .route("/auth")
  .post(authController.authenticate)
  
