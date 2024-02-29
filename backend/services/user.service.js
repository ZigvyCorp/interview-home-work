const User = require('../models/user.model');

module.exports = { getUsers, getById };

function getUsers() {
  return User.find().lean();
}

function getById(id) {
  return User.findById(id).lean();
}