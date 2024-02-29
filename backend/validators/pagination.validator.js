const { param } = require("express-validator");
const ValidationMiddleware = require("../middlewares/validation.middleware");

const PaginationValidator = [
	param("_start").optional().isInt({ min: 0 }).withMessage("Invalid Start"),
	param("_limit").optional().isInt({ min: 1 }).withMessage("Invalid Limit"),
	ValidationMiddleware,
];

module.exports = PaginationValidator;
