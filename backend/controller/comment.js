const commentService = require("../services/comment")

const apiGetCommentByPostId = async (req, res, next) => {
    try {
        let id = req.params.id
        const comments = await commentService.apiGetCommentByPostId(id)
        if(!comments) {
            res.status(404).json("There are no comment found yet!");
        }
        res.json(comments)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


module.exports = {
    apiGetCommentByPostId
}