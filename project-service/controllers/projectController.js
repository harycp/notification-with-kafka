const projectService = require("../services/projectService");

const createProject = async (req, res) => {
  try {
    const project = await projectService.createProject(req.body);
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create project" });
  }
};

const assignTaskToUser = async (req, res) => {
  try {
    const { projectId } = req.params;
    const task = await projectService.assignTask(projectId, req.body);
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to assign task" });
  }
};

module.exports = { createProject, assignTaskToUser };
