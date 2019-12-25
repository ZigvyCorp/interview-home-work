var express = require('express');
var router = express.Router();
const post = require('../model/posts')
const checkAuth = require('../middleware/checkAuth')
/* get post */
router.get('/', (req, res, next) => {
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
    await post.find({})
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
router.get('/:postId', async (req, res, next) => {
    const query = { id: req.params.postId }
    try {
        const foundPost = await post.find(query)
        if (foundPost.length > 0) {
            res.status(200).json({ foundPost })
            return
        }
        return res.status(400).json({ err: 'post id is invalid' })
    } catch (error) {
        res.status(400).json({ error })
    }
})

// get user's post
router.get('/user/:userId', async (req, res, next) => {
    const query = { owner: Number(req.params.userId) }
    try {
        const foundPosts = await post.find(query)
        res.status(200).json({ foundPosts })
    } catch (error) {
        res.status(400).json({ error })
    }
})

// post post
router.post('/', checkAuth, async (req, res, next) => {
    const latestPost = await post.find({}).sort({ id: -1 }).limit(1)
    let postId = 1
    if(latestPost.length > 0){
        postId = latestPost[0].id + 1
    }
    var newPost = new post({
        id: postId,
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
router.delete('/:postId', checkAuth, (req, res, next) => {
    const userId = req.user.id
    // user can just delete his own post
    const query = { id: req.params.postId, owner: userId }
    post.findOneAndRemove(query, (err, data) => {
        if (err) {
            res.status(400).json({ err })
            return
        }
        if (data.length > 0) {
            res.status(200).json(data)
            return
        }
        return res.status(400).json({ err: 'Can not delete this comment' })
    })
})

// update post
router.put('/:postId',checkAuth, (req, res, next) => {

    const userId = req.user.id
    const query = { id: req.params.postId, owner: userId }
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
        if(!data){
            return res.status(400).json({err:'Can not update this post'})
        }
        res.status(200).json(data)
    })
})

module.exports = router;
