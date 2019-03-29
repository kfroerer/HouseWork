const router = require("express").Router();
const db = require("../../")
const authController = require("../../controllers/authController");

// Matches with "/api/auth"
router
  .route("/register")
  //do we need to have this here? house model has auth on it upon create
  // registering is the same as creating a house
  // .post(authController.authenticate)
  
router  
  .route('/login')
  .get(authController.authenticate)