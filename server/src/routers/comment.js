const express = require('express')
const auth = require('../middleware/auth')
const Comment = require('../models/Comment')

const router = express.Router()

router.post('/comments/all', async (req,res) => {
    Comment.find({}, (error, comment) => {
        if(error) return res.status(400).json({error})
        res.status(200).json({comment})
    })

})

router.post('/comments/view/:post_id', async(req,res) => {

    let {post_id} = req.params
    Comment.find({post_id}).exec((error, comment) => {
        if (error) return res.status(400).json({error})
        res.status(200).json({comment})
    })
    
})

router.post('/comment/create',auth,async(req, res) => {
    try {
        let comment = new Comment({
            post_id: req.body.post_id,
            name: req.user.name,
            content: req.body.content,
        })
        await comment.save()
        res.status(200).json({"comment_created": true})
    }
    catch(error)
    {
        res.status(400).json({error})
    }
    
})

router.post('/comment/delete/:comment_id',auth, async(req, res) => {
    let {comment_id} = req.params

    Comment.remove({_id: comment_id}, error => {
        if(error) {return res.status(400).json({error})}
        res.status(200).json({'comment_deleted': true})
    })
})

module.exports = router

