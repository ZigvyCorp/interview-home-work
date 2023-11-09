const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: 1,
    auto: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
  },
  dob: {
    type: String,
    default: new Date().toLocaleDateString("vi-VN"),
  },
  created_at: {
    type: Date,
    default: Date.now,
    // default: new Date().getTime(),
  },
});

module.exports = mongoose.model("users", usersSchema);
