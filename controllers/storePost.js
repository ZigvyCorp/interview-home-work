const Post = require('../models/Post.js');
module.exports = (req, res) => {
    var tagList = (req.body.tags).split(',');
    var id = req.session.userId;
    Post.create({
        ...req.body,
        tags: tagList,
        owner: id,
    }, (error, post) => {
        res.redirect('/')
    })
}