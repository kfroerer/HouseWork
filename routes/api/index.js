const router = require("express").Router();
const roomRoutes = require("./rooms");
const taskRoutes = require("./tasks");

// Room routes
router.use("/rooms", roomRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;
