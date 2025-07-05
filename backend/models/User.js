const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // From Firebase
  email: { type: String, required: true, unique: true },
  name: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
