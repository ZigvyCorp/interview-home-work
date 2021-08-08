const post = require('../models/Post');


class PostController{

    // POST /api/posts/add
    add(req, res, next){
        var newPost = new post(req.body);
        newPost.save()
        .then(res.json({
            Response : "Comment Successfully !"
        }))
        .catch(next);
    }

    // GET /api/posts/getall
    getAll(req, res, next){
        post.find({},(err, objs)=>{
            if(err){
                res.json({
                    Error : err
                });
            }
            else{
                res.json(objs);
            }
        });
    }

    // GET /api/posts/getpost/:id
    getPost(req, res, next){
        post.findOne({id : req.params.id})
        .then(apost => {res.json(apost)})
        .catch(err => res.json({Error : err}));
    }
}

module.exports = new PostController;