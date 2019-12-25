var express = require('express');
var router = express.Router();

const comment = require('../model/comment')

const checkAuth = require('../middleware/checkAuth')
// get comments
router.get('/', (req, res, next) => {
    comment.find({}, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.status(200).json(data)
    }).limit(1)

});
// get comment per page
router.get('/page(/:page)?', async (req, res, next) => {
    const perPage = 1;
    const page = req.params.page || 1;
    await comment.find({})
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

// get user'comments
router.get('/user/:userId', async (req, res, next) => {
    const query = { owner: Number(req.params.userId) }
    try {
        const foundCmt = await comment.find(query)
        res.status(200).json({ foundCmt })
    } catch (error) {
        res.status(400).json({ error })
    }
})
// get post's comments
router.get('/post/:postId', async (req, res, next) => {
    const query = { owner: Number(req.params.postId) }
    try {
        const foundCmt = await comment.find(query)
        res.status(200).json({ foundCmt })
    } catch (error) {
        res.status(400).json({ error })
    }
})
// post comment
router.post('/', checkAuth, async (req, res, next) => {
    const latestComment = await comment.find({}).sort({ id: -1 }).limit(1)
    let cmtId = 1
    if (latestComment.length > 0) {
        cmtId = latestComment[0].id + 1
    }
    var newComment = new comment({
        id: cmtId,
        owner: req.body.owner,
        post: req.body.post,
        content: req.body.content,
        created_at: req.body.created_at,
    });
    newComment.save(function (err) {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.status(200).json({newComment})
    });
})
// delete comment
router.delete('/:commentId', checkAuth, (req, res, next) => {
    const userId = req.user.id
    // user can just delete his own comment
    const query = { id: Number(req.params.commentId), owner: userId }
    comment.findOneAndRemove(query, (err, data) => {
        if (err) {
            res.status(400).json({ err })
            return
        }
        if (data) {
            res.status(200).json(data)
            return
        }
        return res.status(400).json({ err: 'Can not delete this comment' })
    })
})
// put comment
router.put('/:commentId',checkAuth, (req, res, next) => {
    const userId = req.user.id
    const query = { id: req.params.commentId, owner: userId }
    const update = {
        content: req.body.content
    }
    comment.findOneAndUpdate(query, update, (err, data) => {
        if (err) {
            res.status(400).json({ err })
            return
        }
        if(!data){
            return res.status(400).json({err:'Can not update this comment'})
        }
        res.status(200).json({data})
    })
})

module.exports = router;

