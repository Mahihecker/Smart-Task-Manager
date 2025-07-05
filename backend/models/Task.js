const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userUid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: String,
    enum: ["Work", "Personal", "Learning", "Other"],
    default: "Other",
  },
  deadline: {
    type: Date,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
