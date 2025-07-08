require("dotenv").config(); // 🔥 MUST be first
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ Proper CORS for production
app.use(
  cors({
    origin: ["https://equilearnapp.com", "https://www.equilearnapp.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/courses", courseRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
