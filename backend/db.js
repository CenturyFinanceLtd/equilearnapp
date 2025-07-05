const mongoose = require("mongoose");

async function connectDB(connectionString) {
  if (!connectionString) {
    console.warn("No MongoDB URI provided");
    return;
  }
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

module.exports = connectDB;
