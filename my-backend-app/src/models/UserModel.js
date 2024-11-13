const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  // email: { type: String, required: true, unique: true }, // Thêm trường email
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
