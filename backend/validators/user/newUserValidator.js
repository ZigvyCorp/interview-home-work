const User = require("../../models/UserModel");
const { body } = require("express-validator");

const validateNewUser = () => {
  return [
    body("username")
      .isLength({ min: 1, max: 225 })
      .withMessage("User name must be between 1 and 225 characters")
      .notEmpty()
      .withMessage("User name field is required")
      .custom((value) => {
        return User.find({
          username: value,
        }).then((user) => {
          if (user.length > 0) {
            return Promise.reject("Username already in use");
          }
        });
      }),
    body("password")
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
      .custom((value, { req }) => value === req.body.password)
      .withMessage("The passwords do not match"),
    body("dob").isDate().withMessage("This field must be date"),
    body("name").isString().withMessage("This field must be a string"),
  ];
};

module.exports = { validateNewUser };
