const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

app.get("/", (_req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB(MONGODB_URI);
});
