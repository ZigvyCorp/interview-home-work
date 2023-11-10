// const HttpError = require('../models/http-error');
const fetch = require('node-fetch')
const getPosts = async (req, res, next) => {

    let posts;
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        posts = await response.json()
    } catch (error) {
        return next(
            new HttpError('Could not find any post', 500),
        );
    }
    return res.status(200).json(posts);
};

const getPostByID = async (req, res, next) => {

    let post;
    let id = req.params.id
    if (!id || isNaN(id)) {
        next()
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
        post = await response.json()
    } catch (error) {
        return next(
            new HttpError('Could not find any post', 500),
        );
    }

    return res.status(200).json(post);
};

exports.getPosts = getPosts;
exports.getPostByID = getPostByID;
