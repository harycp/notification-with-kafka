const sequelize = require("../config/database");

const Notification = require("./Notifications");

const db = { sequelize, Notification };
module.exports = db;
