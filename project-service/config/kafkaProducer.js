const { kafka } = require("../config/kafka");

const producer = kafka.producer();

const produceKafkaMessage = async (topic, message) => {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
  await producer.disconnect();
};

module.exports = { produceKafkaMessage };
