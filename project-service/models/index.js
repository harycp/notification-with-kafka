const sequelize = require("../config/database");
const Project = require("./Project");
const Task = require("./Task");

Project.hasMany(Task, { foreignKey: "projectId" });
Task.belongsTo(Project, { foreignKey: "projectId" });

const db = { sequelize, Project, Task };
module.exports = db;
