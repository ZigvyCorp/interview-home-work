const Comment = require("../models/commentModel");

const getCommentByPostId = async (req, res) => {
  const postId = req.query.postId;
  if(!postId) res.status(404).json({ error: 'No document found' })

  try {
    const allComment = await Comment
      .find()
      .select('_id postId name email body')

    let data = allComment.map((comment) => {
        if(comment.postId == postId) {
            return {
                _id: comment._id,
                name: comment.name,
                email: comment.email,
                body: comment.body
            }
        }
    }).filter(item => item)
    data = {
        postId,
        comments: data
    }
    if (!data) {
      res.status(404).json({ error: 'No document found' })
      return;
    }

    res.json({data});
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {getCommentByPostId};