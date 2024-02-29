const { param } = require("express-validator");
const ValidationMiddleware = require("../middlewares/validation.middleware");

const IdValidator = [
	param("id").isMongoId().withMessage("Invalid ID"),
	ValidationMiddleware,
];

module.exports = IdValidator;
