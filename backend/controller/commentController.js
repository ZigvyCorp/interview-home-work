import Comment from "../models/commentModel.js"; 


const findAllCommentByPostId = async (req, res) => {
    const postId = req.query.postId; 
    try {
        let comments;
        if (postId) {
            comments = await Comment.find({ postId: postId }); 
        } else {
            comments = await Comment.find();
        }

        if (comments.length > 0) {
            res.json(comments);
        } else {
            res.status(404).json({ message: 'No comments found for this post' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err }); 
    }
  };

  export {
    findAllCommentByPostId
  };