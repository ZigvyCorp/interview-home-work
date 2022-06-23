const { body } = require('express-validator');

const validateCreateUser = () => {
    body('username').not().isEmpty().withMessage('Vui lòng nhập Username')
    .bail()
    .custom(value => !/\s/.test(value)).withMessage('Username không chứa khoảng trắng');

    body('password').not().isEmpty().withMessage('Vui lòng nhập Mật khẩu')
        .bail()
        .isLength({ min: 6 }).withMessage('Mật khẩu phải có ít nhất 6 ký tự')
        .bail()
        .custom(value => !/\s/.test(value)).withMessage('Mật khẩu không chứa khoảng trắng');
    
};

module.exports = {
    validateCreateUser,
}