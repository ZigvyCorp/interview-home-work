const express = require("express");

const {
    createComment,
    updateComment,
    deleteComment,
    getComments,
} = require("../controllers/commentController");

const router = express.Router()

router.get('/comments', getComments)
router.post('/createComment', createComment)
router.delete('/:id', deleteComment)
router.put('/:id', updateComment)


module.exports = router