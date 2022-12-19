const User = require("../../models/UserModel");
const { body } = require("express-validator");
const userService = require("../../services/UserService");

const validateForgotPasswordUser = () => {
    return [
      body("newPassword")
        .exists({ checkFalsy: true })
        .withMessage("Password field is required")
        .isStrongPassword({
          minLength: 8,
          minNumbers: 1,
          minSymbols: 1,
          minUppercase: 1,
          minLowercase: 1,
        })
        .withMessage(
          "Password must be at least 8 characters long, 1 number, 1 symbols, 1 uppercase and 1 lowercase"
        ),
      body("confirmedPassword")
        .exists({ checkFalsy: true })
        .withMessage("Confirmation password field is required")
        .custom((value, { req }) => value === req.body.newPassword)
        .withMessage("The passwords do not match"),
    ];
  };
  
  module.exports = { validateForgotPasswordUser };