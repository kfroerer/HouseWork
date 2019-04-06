const router = require("express").Router();
const roomRoutes = require("./rooms");
const taskRoutes = require("./tasks");
// const authRoutes = require('./auth');

router.use("/rooms", roomRoutes);
router.use("/tasks", taskRoutes);
// router.use("/auth", authRoutes);

module.exports = router;
