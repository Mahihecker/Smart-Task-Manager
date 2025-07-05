const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Task = require("../models/Task");

//POST /api/users/register
router.post("/register", async (req, res) => {
  const { uid, email, name } = req.body;

  try {
    // Checking if accountalready exists
    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ uid, email, name });
      await user.save();
    }

    res.status(201).json({ message: "User saved successfully", user });
  } catch (err) {
    console.error("Register error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/users/:uid
router.get("/:uid", async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    console.error("Fetch user error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;


// DELETE /api/users/:uid
router.delete("/:uid", async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ uid: req.params.uid });
    if (!deletedUser) return res.status(404).json({ message: "User not found" });

    // Delete all task
    await Task.deleteMany({ userId: req.params.uid });

    res.status(200).json({ message: "User and related tasks deleted successfully" });
  } catch (err) {
    console.error("Delete user error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});
