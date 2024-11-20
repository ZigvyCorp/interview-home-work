const { check, validationResult } = require('express-validator');
exports.CreatePostValidator = function(req, res, next){
    req.check('title', 'Title is required.').notEmpty();
    req.check('content', 'Content is required.').notEmpty();
    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}