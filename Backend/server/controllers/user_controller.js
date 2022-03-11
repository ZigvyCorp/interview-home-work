import mongoose from 'mongoose';
import User from '../models/user.js';

// Create new user
export function createUser (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    dob: req.body.dob,
    created_at: req.body.created_at,
  });
  
  User.findOne({ username: req.body.username })
    .then((allUser) => {
      if (allUser) {
        return res.status(400).send({ message: "User already exists "});
      }
      else {
        user
        .save(user)
        .then((newUser) => {
          return res.status(201).json({
            message: 'User has been created',
            User: newUser,
          });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
            message: 'Server error. Please try again.',
            error: error.message,
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: err.message,
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



// Get single user
export function getSingleUser(req, res) {
  const id = req.params.id;
  User.findById(id)
    .then((singleUser) => {
      if (!singleUser) {
        res.status(404).send({ message: "Cannot find user with id " + id });
      } 
      else {
        res.status(200).json({
          User: singleUser,
        });
      }  
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: err.message,
      });
   });
}



// Update user
export function updateUser(req, res) {
  const id = req.params.id;
  const updateObject = req.body;
  User.findByIdAndUpdate(id, updateObject, { useFindAndModify: false })
    .then(currentUser => {
      if (!currentUser) {
        res.status(404).send({ message: "Cannot update user with id " + id });
      }
      else {
        res.status(200).json({
          message: 'User has been updated',
          updateUser: updateObject,
        });
      } 
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.'
      });
    });
}



// Delete user
export function deleteUser(req, res) {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .then(currentUser => {
      if (!currentUser) {
        res.status(404).send({ message: "Cannot delete user with id " + id });
      }
      else {
        res.status(204).json({
          message: 'User has been deleted'
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.'
      });
    });
}
