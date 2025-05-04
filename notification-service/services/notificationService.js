const Notification = require("../models/Notifications");

const handleTaskAssigned = async ({ userId, title }) => {
  const message = `You have been assigned a task: ${title}`;

  console.log(
    `[Notification Service] Creating notification for user ${userId}: ${message}`
  );
  await Notification.create({ userId, message });
};

module.exports = { handleTaskAssigned };
