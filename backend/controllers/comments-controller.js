// const HttpError = require('../models/http-error');
const fetch = require('node-fetch')
const getAllComments = async (req, res, next) => {

    let comments;
    let postId = req.query.postId
    if (postId) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/post/' + postId + '/comments' );
            comments = await response.json()
        } catch (error) {
            return next(
                new HttpError('Could not find any comments', 500),
            );
        }

        return res.status(200).json(comments)
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        comments = await response.json()
    } catch (error) {
        return next(
            new HttpError('Could not find any comments', 500),
        );
    }
    return res.status(200).json(comments);
};

exports.getAllComments = getAllComments;
