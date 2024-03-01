const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  name: String,
  dob: String,
  created_at: Date,
});

module.exports = mongoose.model('User', userSchema);