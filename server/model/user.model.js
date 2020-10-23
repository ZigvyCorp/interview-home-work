
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Design Schema
let userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  dob: String, // Date of birth
  created_at: Number,
});
// end Design

module.exports = mongoose.model("users", userSchema);
