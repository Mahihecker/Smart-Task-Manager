const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const { createTask, getTasksByUser, updateTaskStatus,deleteTask,getTaskById,updateTaskById } = require("../controllers/taskController");
// @route POST /api/tasks/create
router.post("/create", createTask);

// Get all tasks for a user
router.get("/user/:uid", getTasksByUser);
router.patch("/status/:id", updateTaskStatus);
router.delete("/:id", deleteTask);
router.get("/task/:id", getTaskById);          // for fetching one task
router.put("/:id", updateTaskById);

module.exports = router;
