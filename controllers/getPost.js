const Post = require('../models/Post.js')
module.exports = (req, res) => {
    Post.findById(req.params.id, function (error, postDetail) {
        res.render('post', {
            postDetail
        })
    })
}