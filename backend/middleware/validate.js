const { body } = require('express-validator');

const validateCreateUser = () => {
    body('username')
        .not()
        .isEmpty()
        .withMessage('Please enter Username!')
        .bail()
        .custom((value) => !/\s/.test(value))
        .withMessage('Username must not contain spaces!');

    body('password')
        .not()
        .isEmpty()
        .withMessage('Please enter a password!')
        .bail()
        .isLength({ min: 6 })
        .withMessage('Passwords must be at least 6 characters!');
};

module.exports = {
    validateCreateUser,
};
