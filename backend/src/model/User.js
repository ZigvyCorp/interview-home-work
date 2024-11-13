const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    name: String,
    dob: Date,
    created_at: { type: Date, default: Date.now },
  },
  { collection: "user" }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
