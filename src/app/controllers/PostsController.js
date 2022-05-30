const Posts = require('../models/Posts');
const {mongooseToObject} = require('../../util/mongoose');
const { json } = require('express/lib/response');
class PostsController {
    //[GET] /posts/:slug page
    show(req, res, next) {
        Posts.findOne({ slug: req.params.slug })
            .then(posts => {
                res.render('posts/show',
                { posts:mongooseToObject(posts) })
            })
            .catch(next);
    }
    //[GET] /posts/create page
    create(req, res, next) {
       res.render('posts/create')
    }

    //[POST] /posts/create page
    store(req, res, next) {
        //save data
        Posts.create(req.body)
            .then(() => res.redirect('/me/stored/posts'))
            .catch(next)
     }

      //[GET] /posts/:id
    edit(req, res, next) {
        Posts.findById(req.params.id)
            .then(posts => {
                res.render('posts/edit', {posts: mongooseToObject(posts)});
            })
            .catch(next) 
     }
    //[PUT] /posts/:id
    update(req, res, next) {
        Posts.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/me/stored/posts'))
            .catch(next)
    }

    //[PATCH] /posts/:id/restore
    restore(req, res, next) {
        Posts.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DELETE] /posts/:id
    softDelete(req, res, next) {
        Posts.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DELETE] /posts/:id/destroy
    destroy(req, res, next) {
        Posts.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[POST] /posts/handle-form-actions
    handleFormActions(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Posts.delete({_id: {$in: req.body.postsIds} })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            case 'destroy':
                Posts.deleteMany({_id: {$in: req.body.postsIds} })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            case 'restore':
                Posts.restore({_id: {$in: req.body.postsIds} })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.redirect('/me/stored/posts');
        }
        
    }
}
module.exports = new PostsController();
