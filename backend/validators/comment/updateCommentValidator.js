const { body } = require('express-validator')

const validateUpdateComment = () => {
    return [
        body('content').notEmpty().withMessage('Content is required'),
    ]
}

module.exports = { validateUpdateComment }