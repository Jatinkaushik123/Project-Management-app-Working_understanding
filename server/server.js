const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// connect database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});