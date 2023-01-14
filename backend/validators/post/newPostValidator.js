const { body } = require("express-validator");

const validateNewPost = () => {
  return [
    body("content").notEmpty().withMessage("Content field is required"),
    body("title")
      .notEmpty()
      .withMessage("Title field is required")
      .isLength({ min: 1, max: 225 })
      .withMessage("User name must be between 1 and 225 characters"),
  ];
};

module.exports = { validateNewPost };
