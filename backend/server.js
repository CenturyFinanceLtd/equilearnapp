require("dotenv").config(); // 🔥 MUST be first
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
const PORT = process.env.PORT || 4001;

// ✅ Allow localhost and production domains
const allowedOrigins = [
  "https://equilearnapp.com",
  "https://www.equilearnapp.com",
  "http://localhost:3001",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
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
