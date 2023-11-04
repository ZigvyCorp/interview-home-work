const { Schema } = require('mongoose');
const { blogDb } = require('../databases/init.mongodb');

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: String, required: true },
}, {
  collection: 'users',
  timestamps: true,
})

module.exports = blogDb.model('users', UserSchema);
