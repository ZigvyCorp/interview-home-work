const { body } = require("express-validator");

function validateCreatePost() {
  return [
    body("title")
      .not()
      .isEmpty()
      .withMessage("Title is not empty")
      .isLength({ max: 150 })
      .withMessage("Title has to be max 150 characters"),
    body("content")
      .not()
      .isEmpty()
      .withMessage("Content is not empty")
      .bail()
      .isLength({ min: 6 })
      .withMessage("Content has to be at least 6 characters")
  ];
}

module.exports = {
    validateCreatePost,
};
