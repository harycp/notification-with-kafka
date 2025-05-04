const { kafka } = require("../config/kafka");
const { handleTaskAssigned } = require("../services/notificationService");

const consumer = kafka.consumer({ groupId: "notification-group" });

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "task-assigned", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const data = JSON.parse(message.value.toString());
      console.log("[Kafka] Received:", data);
      await handleTaskAssigned(data);
    },
  });
};

module.exports = { startConsumer };
