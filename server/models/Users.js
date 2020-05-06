const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema(
  {
    username: { type: String },
    password: { type: String },
    name: { type: String },
    dob: { type: String }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Users', UsersSchema, 'Users');

module.exports.editableField = ['name', 'dob'];