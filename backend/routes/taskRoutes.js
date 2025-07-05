const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const { createTask, getTasksByUser, updateTaskStatus,deleteTask,getTaskById,updateTaskById } = require("../controllers/taskController");
// @route POST /api/tasks/create
router.post("/create", createTask);

// Get all tasks for a user
// @route   GET /api/tasks/user/:uid
router.get("/user/:uid", getTasksByUser);

// @route   PATCH /api/tasks/status/:id
router.patch("/status/:id", updateTaskStatus);

// @route   DELETE /api/tasks/:id
router.delete("/:id", deleteTask);
// @route   GET /api/tasks/task/:id
router.get("/task/:id", getTaskById);
// @route   PUT /api/tasks/:id  
router.put("/:id", updateTaskById);

module.exports = router;
