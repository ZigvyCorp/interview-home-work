const HttpError = require('../models/http-error');
const fetch = require('node-fetch')
const getUsers = async (req, res, next) => {

  let users;
  let user;
  let userId = req.query.userId
  if (userId) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users?id=' + userId);
      user = await response.json()
    } catch (error) {
      return next(
          new HttpError('Could not find any user', 500),
      );
    }
  
    return res.status(200).json(user);
  }
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json()
  } catch (error) {
    return next(
        new HttpError('Could not find any user', 500),
    );
  }

  return res.status(200).json(users);
};

exports.getUsers = getUsers