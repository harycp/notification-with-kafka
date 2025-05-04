const Project = require("../models/Project");
const Task = require("../models/Task");
const { produceKafkaMessage } = require("../config/kafkaProducer");

const createProject = async (data) => {
  return await Project.create(data);
};

const assignTask = async (projectId, data) => {
  const task = await Task.create({
    ...data,
    projectId,
  });

  await produceKafkaMessage("task-assigned", {
    taskId: task.id,
    projectId: task.projectId,
    userId: task.assignedUserId,
    title: task.title,
  });

  return task;
};

module.exports = { createProject, assignTask };
