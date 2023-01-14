const User = require("../../models/UserModel");
const { body } = require("express-validator");
const userService = require("../../services/UserService");

const validateUpdateUser = () => {
  return [
    body("oldPassword")
      .if((value, { req }) => req.body.newPassword)
      // OR
      .if(body("newPassword").exists())
      .notEmpty()
      .withMessage("Old password field is required")
      .isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
        minLowercase: 1,
      })
      .withMessage(
        "Password must be at least 8 characters long, 1 number, 1 symbols, 1 uppercase and 1 lowercase"
      )
      .custom((value, { req }) => {
        if (value !== req.body.newPassword)
          return Promise.reject("Same old password");
        else
          return User.find({
            username: req.body.username,
          }).then((user) => {
            var hashValue = userService.hashPassword(value);
            if (user.password !== hashValue) {
              return Promise.reject("Wrong old password");
            }
          });
      }),
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
    body("dob").isDate().withMessage("This field must be date"),
    body("name").isString().withMessage("This field must be a string"),
  ];
};

module.exports = { validateUpdateUser };
