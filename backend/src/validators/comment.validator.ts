import { body } from "express-validator";

export const createCommentValidator = [
  body("postId").exists().withMessage("Post ID is required"),
  body("name").exists().withMessage("Name is required"),
  body("email").exists().withMessage("Email is required"),
  body("body").exists().withMessage("Body is required"),
]

export const updateCommentValidator = [
  body("name")
    .optional()
    .withMessage("Name is required"),
  body("email")
    .optional()
    .withMessage("Email is required"),
  body("body")
    .optional()
    .withMessage("Body is required"),
]