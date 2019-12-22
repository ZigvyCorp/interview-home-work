const express = require('express')
const auth = require('../middleware/auth')
const Post = require('../models/Post')


const router = express.Router()


router.post('/post/view/:page', async (req, res) => {
    const perPage = 2
    let page = req.params.page || 1

    Post.find({}).skip((perPage * page) - perPage).limit(perPage)
        .exec((err, posts) => {
            if (err) res.status(400).json({error: err})
            Post.count().exec( async (error, count) => {
                if (error)  res.status(400).json({error})
                if(page > Math.ceil(count / perPage)) res.status(400).json({"posts": []})
                res.status(200).json({
                    posts:
                    {
                        posts,
                        current: parseInt(page),
                        pages: Math.ceil(count / perPage),
                        total: parseInt(count)
                    }
                })
            })
        })
})

router.post('/post/all', async (req, res) => {
    Post.find({},(error, posts) => {
        if(error) return res.status(400).json({error})
        res.status(200).json({posts})
    })
})

router.post('/post/view/:id', async(req,res) => {
    let {id} = req.params
    Post.findById(req.params.post_id).exec((error, post) => {
        if (error) res.status(400).json({error})
        res.json({post})
    })
    
})

router.post('/post/create',auth,async(req, res) => {
    try {
        let post = new Post({
            owner: req.user._id,
            title: req.body.title,
            content: req.body.content,
            tag: req.body.tag,
            summary: req.body.summary
        })
        await post.save()
        res.status(200).json({"post_created": true})
    }
    catch(error)
    {
        res.status(400).json({error})
    }
    
})

router.post('/post/update/:post_id',auth, async(req, res) => {
    let {post_id} = req.params
    Post.findById(post_id).exec((error, post) => {
        
        //error if not find post_id
        if (error) res.status(400).json({error: error.message})

            if(req.body.title) post.title =  req.body.title
            if(req.body.content) post.content =  req.body.content
            if(req.body.tag) post.tag =  req.body.tag
            if(req.body.title || req.body.content || req.body.tag)
            {
                post.save().then(post => {
                    res.status(200).json({"post_updated": true, post})
                }).catch(error => {res.status(400).json({error})}) 

            }
            else res.status(200).json({post})
    })
})

router.post('/post/delete/:post_id',auth, async(req, res) => {
    let {post_id} = req.params
    Post.remove({_id: post_id}, error => {
        if(error) {return res.status(400).json({error})}
        res.status(200).json({'post_deleted': true})
    })
})

module.exports = router

