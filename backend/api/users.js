const express = require('express')
const router = express.Router()

router.get('/*', (req, res) => {
    let userId = req.url
    fetch('https://jsonplaceholder.typicode.com/users'.concat(userId))
    .then(res => res.json())
    .then(user => res.json(user))
    .catch(error => console.log(error))
})

module.exports = router