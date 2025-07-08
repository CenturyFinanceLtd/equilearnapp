// db.js
const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://rksrivastava9890:UlSY7YNEgR6Q6jE2@centuryfinancecluster.bggmzok.mongodb.net/equiLearnDB?retryWrites=true&w=majority&appName=CenturyFinanceCluster";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB connection failed ❌", err);
    process.exit(1);
  }
};

module.exports = connectDB;
