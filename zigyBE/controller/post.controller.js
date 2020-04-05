const postService = require('../services').PostService;

function getAllPost(req, res, next) {
    postService.getAllPost()
        .then(posts => {res.json(posts)})
        .catch(err => next(err));
}

function addPost(req, res, next) {
    postService.create(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}

function getByKeyWord(req, res, next) {
    postService.getByKeyWord(req.query.keyword)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
module.exports = {
    getAllPost,
    addPost,
    getByKeyWord,
}