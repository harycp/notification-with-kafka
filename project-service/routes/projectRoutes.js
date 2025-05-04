const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/project", projectController.createProject);
router.post("/project/:projectId/tasks", projectController.assignTaskToUser);

module.exports = router;
