const router = require("express").Router();
const db = require("../../")
const authController = require("../../controllers/authController");

// Matches with "/api/auth"
router  
  .route('/login')
  .get(authController.authenticate)