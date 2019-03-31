const router = require("express").Router();
const roomRoutes = require("./rooms");
const taskRoutes = require("./tasks");
const houseRoutes = require("./houses");
// const authRoutes = require('../auth');

router.use("/rooms", roomRoutes);
router.use("/tasks", taskRoutes);
router.use("/house", houseRoutes);
// router.use("/auth", authRoutes);

module.exports = router;
