import { query } from "express-validator";

export const queryValidator = [
  query("page")
    .isInt({ min: 0 })
    .optional()
    .default(0)
    .withMessage("Page must be a number"),
  query("size")
    .isInt({ min: 10 })
    .optional()
    .default(10)
    .withMessage("Size must be a number"),
];