import { body } from "express-validator";

export const createPostValidator = [
  body("userId").exists().withMessage("User ID is required"),
  body("title").isLength({ min: 2 }),
  body("body").isLength({ min: 10 }),
];

export const updatePostValidator = [
  body("title")
    .optional()
    .withMessage("Title is required"),
  body("body")
    .optional()
    .withMessage("Body is required"),
]