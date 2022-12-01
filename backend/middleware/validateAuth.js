const { body } = require("express-validator");

function validateCreateUser() {
  return [
    body("username")
      .not()
      .isEmpty()
      .withMessage("Invalid username")
      .bail()
      .custom((value) => !/\s/.test(value))
      .withMessage("Invalid username!"),
    body("password")
      .not()
      .isEmpty()
      .withMessage("Invalid password!")
      .bail()
      .isLength({ min: 6 })
      .withMessage("Password has to be at least 6 characters")
      .bail()
      .custom((value) => !/\s/.test(value))
      .withMessage("Invalid password!"),
  ];
}

function validateLogin() {
  return [
    body("username")
      .not()
      .isEmpty()
      .withMessage("Invalid username")
      .bail()
      .custom((value) => !/\s/.test(value))
      .withMessage("Invalid username!"),
  ]
}

module.exports = {
  validateCreateUser,
  validateLogin
};
