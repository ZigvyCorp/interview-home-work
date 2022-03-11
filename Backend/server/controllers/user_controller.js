import mongoose from 'mongoose';
import User from '../models/user.js';

// create new user
export function createUser (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    dob: req.body.dob,
    created_at: req.body.created_at,
  });
  
  return user
    .save()
    .then((newUser) => {
      return res.status(201).json({
        message: 'User has been created',
        User: newUser,
      });
    })
    .catch((error) => {
        console.log(error);
      res.status(500).json({
        message: 'Cannot create user',
        error: error.message,
      });
    });
  }
  
// Get all users
export function getAllUser( req, res){
  User.find()
    .select('_id username password name dob created_at')
    .then((allUser) => {
      return res.status(200).json({
        User: allUser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}

// get single user
export function getSingleUser(req, res) {
  const id = req.params.id;
  User.findById(id).exec()
    .then((singleUser) => {
      res.status(200).json({
        User: singleUser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'This user does not exist',
        error: err.message,
      });
   });
}

// update user
export function updateUser(req, res) {
  const id = req.params.id;
  const updateObject = req.body;
  User.updateOne({ _id:id }, { $set:updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        message: 'User has been updated',
        updateUser: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Cannot update user'
      });
    });
}

// delete user
export function deleteUser(req, res) {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(204).json({
        message: 'User has been deleted'
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Cannot delete user'
      });
    });
}
