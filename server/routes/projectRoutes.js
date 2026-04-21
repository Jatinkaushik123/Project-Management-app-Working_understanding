const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// GET all projects
router.get("/", getProjects);

// POST create project
router.post("/", createProject);

// UPDATE project
router.put("/:id", updateProject);

// DELETE project
router.delete("/:id", deleteProject);

module.exports = router;