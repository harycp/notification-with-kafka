const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "project-service",
  brokers: [process.env.KAFKA_BROKER],
});

module.exports = { kafka };
