const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/auth"
router
  .route("/register")
  .get(authController.authenticate)
  
router  
  .route('/login')
  .get(authController.authenticate)