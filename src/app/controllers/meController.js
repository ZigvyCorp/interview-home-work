const Posts = require('../models/Posts');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class SiteController {
    //[GET] /me/stored/posts
    storedPosts(req, res,next) {
        let postsRequest = Posts.find({});
    
        if(req.query.hasOwnProperty('_sort')) {
            postsRequest = postsRequest.sort({
                [req.query.column]: req.query.type,
            })
        }
        
        Promise.all([postsRequest, Posts.countDocumentsDeleted({})])
            .then( ([posts, countPostsDeleted]) => {
                res.render('me/store-posts',
                 { 
                    posts: mutipleMongooseToObject(posts),
                    countPostsDeleted,                
                    });
            })
            .catch(next)
    }
    //[GET] /me/trash/post
    trashPosts(req, res,next) {
        let postsRequest = Posts.findDeleted({});

        if(req.query.hasOwnProperty('_sort')) {
            postsRequest = postsRequest.sort({
                [req.query.column]: req.query.type,
            })
        }

        postsRequest
            .then(posts => {
                res.render('me/trash-posts',
                    { posts: mutipleMongooseToObject(posts) });
            })
            .catch(next)
    }
}
module.exports = new SiteController();