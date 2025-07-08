const mongoose = require("mongoose");

// ✅ Debug log to confirm env is loaded
console.log("MONGODB_URI =>", process.env.MONGODB_URI);

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB connection error ❌", err);
    process.exit(1);
  }
};

module.exports = connectDB;
