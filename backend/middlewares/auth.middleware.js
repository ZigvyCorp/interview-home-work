const { check } = require("express-validator");
const User = require("../models/user.model");

const validateSignUp = [
  check("username")
    .isLength({ min: 5 })
    .withMessage("Username should have min 5 characters.")
    .custom((value) => {
      return User.findOne({ username: value }).then((user) => {
        if (user) {
          return Promise.reject("The username already exists");
        }
      });
    }),
  check("email")
    .isEmail()
    .withMessage("Invalid email.")
    .custom((value) => {
      return User.findOne({ email: value }).then((user) => {
        if (user) {
          return Promise.reject("Email in use");
        }
      });
    }),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/\d/)
    .withMessage("Password must contain at least one number"),
  check("role").isIn(["user", "admin"]).withMessage("You must choose a role"),
  check("dob")
    .isISO8601()
    .toDate()
    .withMessage("Date of birth must be in ISO 8601 format (YYYY-MM-DD)"),
];

module.exports = { validateSignUp };
