const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String },
  dob: { type: Date },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", userSchema);
