const Task = require("../models/taskModel");

// CREATE TASK
const createTask = async (req, res) => {
  try {
    const { title, priority, projectId } = req.body;

    const task = new Task({
      title,
      priority,
      projectId,
    });

    const savedTask = await task.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET TASKS BY PROJECT
const getTasksByProject = async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE TASK (MARK COMPLETE)
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { status: "Completed" },
      { new: true }
    );

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask,
};