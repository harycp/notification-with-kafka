require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const { sequelize } = require("./config/database");
const db = require("./models");

app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Database connected.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Database connection error:", error);
  }
});
