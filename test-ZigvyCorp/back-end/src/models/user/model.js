const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  dob: String,
  created_at: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;