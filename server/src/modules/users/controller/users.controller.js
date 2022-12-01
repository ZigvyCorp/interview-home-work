const HttpStatus = require("http-status");
const Users = require("../model/users.model");

const getList = (req, res, next) => {
  Users.find({})
    .then(users => res.render('home', {
      users
    }))
    .catch(next)
};

const getNameUser = (req, res, next) => {
  console.log('req.body.email: ', req.body.email);
  Users.findOne({ email: req.body.email})
  .then(name => res.render('header', {
    nameUser: name
  }))
  .catch(next)
}

module.exports = {
  getList,
  getNameUser
};
