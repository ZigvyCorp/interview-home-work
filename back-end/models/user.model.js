const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  name: String,
  created_at: Number,
  dob: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
