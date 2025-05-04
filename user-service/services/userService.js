const User = require("../models/User");
const { produceKafkaMessage } = require("./kafkaProducer");

const createUser = async (data) => {
  const user = await User.create(data);

  await produceKafkaMessage("user-created", {
    id: user.id,
    username: user.username,
    email: user.email,
  });

  return user;
};

module.exports = { createUser };
