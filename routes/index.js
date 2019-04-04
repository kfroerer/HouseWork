const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");
const passport = require("passport");
const rooms = require("./api/rooms");
const tasks = require("./api/tasks");
const houseRoutes = require('./houses')
// API Routes
router.use("/api",  passport.authenticate("jwt", { session: false }), apiRoutes);
router.use("/auth", authRoutes);
router.use("/house", houseRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
