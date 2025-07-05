const Task = require("../models/Task");
console.log("🧠 Loaded Task model:", Task);


// @route   POST /api/tasks/create
exports.createTask = async (req, res) => {
  try {
    const { userUid, title, description, category, deadline } = req.body;

    if (!userUid || !title || !deadline) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newTask = await Task.create({
      userUid,
      title,
      description,
      category,
      deadline,
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @route    GET /api/tasks/user/:uid
exports.getTasksByUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const tasks = await Task.find({ userUid: uid }).sort({ deadline: 1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

// @route   PATCH /api/tasks/status/:id
exports.updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isCompleted } = req.body;

    const updated = await Task.findByIdAndUpdate(
      id,
      { isCompleted },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    console.error("❌ Failed to update task status:", err);
    res.status(500).json({ message: "Failed to update status" });
  }
};

// DELETE: /api/tasks/:id
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("🧹 Deleting task with ID:", id);

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      console.log("Invalid ID format");
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      console.log("Task not found");
      return res.status(404).json({ message: "Task not found" });
    }

    console.log("Task deleted successfully");
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// @route   GET /api/tasks/task/:id
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// @route   PUT /api/tasks/:id
exports.updateTaskById = async (req, res) => {
  try {
    const { title, description, category, deadline } = req.body;
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, category, deadline },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};
