const comment = require('../models/Comment');


class CommentController{

    // POST /api/comments/add
    add(req, res){
        var newCmt = new comment(req.body);
        newCmt.save()
        .then(res.json({
            Response : "Comment Successfully !"
        }))
        .catch(err => res.json({Error : err}));
    }

    // POST /api/comments/:post
    getall(req , res){
        comment.findOne({id: req.params.post})
        .then(cmts => res.json(cmts))
        .catch(err => res.json({Error : err}));
    }

}

module.exports = new CommentController;