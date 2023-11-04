const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    let postId = req.query.postId
    if (postId) {
        fetch('https://jsonplaceholder.typicode.com/comments'.concat('?postId=').concat(postId))
        .then(res => res.json())
        .then(comments => res.json(comments))
        .catch(error => console.log(error))
    }
    else {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(comments => res.json(comments))
        .catch(error => console.log(error))
    }
})

module.exports = router