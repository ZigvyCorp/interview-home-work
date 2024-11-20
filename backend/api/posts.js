const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
    let keyword = req.query.title
    if (!keyword) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => res.json(posts))
        .catch(error => console.log(error))
    }
    else {
        fetch('https://jsonplaceholder.typicode.com/posts?title='.concat(keyword))
        .then((response) => response.json())
        .then((post) => res.json(post))
    }
    
})

router.get('/*/comments', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/posts/'.concat(req.url))
    .then(res => res.json())
    .then(posts => res.json(posts))
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
    let userId = req.body.userId
    let title = req.body.title
    let body = req.body.body
    if (!userId || !title || ! body) {
        res.sendStatus(400)
    }
    else {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            title,
            body
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then(async (json) => {
            const newPost = await Post.create({ userId: json.userId, id: json.id, title: json.title, body: json.body })
            if (newPost) {
                res.json(newPost)
            }
            else res.sendStatus(500)
        });
    }
})

router.delete('/*', async (req, res) => {
    let id = req.url.split('/')[1]
    let post = await Post.find({ id })
    if (post.length !== 0) {
        Post.deleteMany({ id })
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    }
    else res.sendStatus(400)
})

// router.get('/search', async (req, res) => {
//     let key = req.query.key
//     let result = await Post.findOne({ title: { $regex: key.toString(), $options: 'ix' } })
//     if (result) res.json(result)
//     else {
//         res.sendStatus(400)
//     }
// })

module.exports = router