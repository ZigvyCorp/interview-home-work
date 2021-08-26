const User = require('../models/userModel');
const crud = require('./utils/crud');

// CRUD
exports.createUser = crud.createOne(User);
exports.getAllUsers = crud.getAll(User);
exports.getUser = crud.getOne(User, { path: 'comments' });
exports.updateUser = crud.updateOne(User);
exports.deleteUser = crud.deleteOne(User);
