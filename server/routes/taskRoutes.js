const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// CREATE TASK
router.post("/", createTask);

// GET TASKS BY PROJECT
router.get("/:projectId", getTasksByProject);

// UPDATE TASK
router.put("/:id", updateTask);

// DELETE TASK
router.delete("/:id", deleteTask);

module.exports = router;