const Notification = require("../models/Notifications");

const handleTaskAssigned = async ({ userId, title }) => {
  const message = `You have been assigned a task: ${title}`;
  await Notification.create({ userId, message });
};
