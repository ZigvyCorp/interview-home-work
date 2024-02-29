const { body } = require("express-validator");
const userServices = require("../services/user.service");
const ValidationMiddleware = require("../middlewares/validation.middleware");

const PostValidator = [
	body("title")
		.isLength({ min: 5 })
		.withMessage("Title must be at least 5 characters long"),
	body("content")
		.isLength({ min: 10 })
		.withMessage("Content must be at least 10 characters long"),
	body("tags").isArray().withMessage("Tags must be an array"),
	body("tags.*").isString().withMessage("Each tag must be a string"),
	body("owner")
		.isMongoId()
		.custom(async (value) => {
			const user = await userServices.getById(value);
			if (!user) return Promise.reject();
		})
		.withMessage("Owner must be a valid id"),
	ValidationMiddleware,
];

module.exports = PostValidator;
