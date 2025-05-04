const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Project = require("./Project");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignedUserId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    projectId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "tasks",
    timestamps: true,
  }
);

module.exports = Task;
