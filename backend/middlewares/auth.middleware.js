const { check } = require("express-validator");
const User = require("../models/user.model");

// The validateSignUp middleware is used to validate the user's input when signing up.
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
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/\d/)
    .withMessage("Password must contain at least one number"),
  check("dob")
    .isISO8601()
    .toDate()
    .withMessage("Date of birth must be in ISO 8601 format (YYYY-MM-DD)"),
];

// Middleware passport.authenticate("local") is used to authenticate the user.
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json({ message: "Unauthorized" });
};

module.exports = { validateSignUp, ensureAuthenticated };
