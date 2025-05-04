const userService = require("../services/userService");

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: "User Created Successfuly", data: user });
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = { createUser };
