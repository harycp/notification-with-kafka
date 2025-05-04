const { kafka } = require("../config/kafka");
const notificationService = require("../services/notificationService");

const consumer = kafka.consumer({ groupId: "notification-group" });

const startConsumer = async () => {
  await consumer.connect();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await consumer.subscribe({ topic: "task-assigned", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const data = JSON.parse(message.value.toString());
      console.log("[Kafka] Received:", data);
      await notificationService.handleTaskAssigned(data);
    },
  });
};

module.exports = { startConsumer };
