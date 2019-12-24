var express = require('express');
var router = express.Router();
const post = require('../model/posts')
const checkAuth = require('../middleware/checkAuth')
/* GET post */
router.get('/',(req, res, next) => {
    post.find({}, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.status(200).json(data)
    }).limit(1)

});
// get post per page
router.get('/page(/:page)?', async (req, res, next) => {
    const perPage = 1;
    const page = req.params.page || 1;
    const posts = await post.find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, data) => {
            if (err) {
                res.status(400).json(err)
                return
            }
            res.status(200).json(data)
        })
})

// get post detail
router.get('/:postId', (req, res, next) => {

})

// post post
router.post('/',checkAuth ,async (req, res, next) => {
    const latestPost = await post.find({}).sort({ id: -1 }).limit(1)
    var newPost = new post({
        id:latestPost[0].id+1,
        owner: req.body.owner,
        title: req.body.title,
        content: req.body.content,
        created_at: req.body.created_at,
        tags: req.body.tags
    });
    newPost.save(function (err) {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.status(200).json(newPost)
    });
})

// delete post
router.delete('/:postId', (req, res, next) => {
    const query = { id: req.params.postId }
    post.findOneAndRemove(query, (err, data) => {
        if (err) {
            res.status(400).json({ err })
            return
        }
        res.status(200).json(data)
    })
})

// update post
router.put('/:postId', (req, res, next) => {
    const query = { id: req.params.postId }
    const update = {
        tags: req.body.tags,
        title: req.body.title,
        content: req.body.content
    }
    post.findOneAndUpdate(query, update, { upsert: true }, (err, data) => {
        if (err) {
            res.status(400).json({ err })
            return
        }
        res.status(200).json(data)
    })
})

module.exports = router;
