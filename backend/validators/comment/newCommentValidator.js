const { body } = require('express-validator')

const validateNewComment = () => {
    return [
        body('content').notEmpty().withMessage("Content is required"),
    ]
}

module.exports = { validateNewComment }