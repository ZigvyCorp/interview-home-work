const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String },
  dob: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
