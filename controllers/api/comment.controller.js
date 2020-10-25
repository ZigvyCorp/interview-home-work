let Comment = require("../../models/PostSchema");

//add new post
exports.addNewComment = (req, res) => {
    let new_comment = new Comment(req.body);
    new_comment.save((err, new_comment_data) => {
        if (err) {
            res.json({ message: "Error to save your comment.", error: err });
            return;
        }
        res.json({ message: "Comment success.", data: new_comment_data });
    });
};


//update comment
exports.updateComment = async (req, res) => {
    try {
        let update_comment_id = req.params.id;
        let content_comment_update = req.body;
        let content_current_comment = await Comment.findById(update_comment_id);

        if (content_current_comment === null) {
            res.json({ message: "Post is not exist." });
        }

        content_current_comment.content = content_comment_update.content
            ? content_comment_update.content
            : content_current_comment.content;

        content_current_comment.save((err, content_updated_comment) => {
            if (err) {
                res.json({ message: "Error to update comment.", error: err });
            } else {
                res.json({ message: "Update comment success.", data: content_updated_comment });
            }
        });
    } catch (err) {
        throw err;
    }
}

//delete comment
exports.deleteComment = (req, res) => {
    let delete_comment_id = req.params.id;

    let comment_deleted = await Comment.findById(delete_comment_id);
    if (comment_deleted !== null) {
        Comment.deleteOne({ _id: delete_comment_id }, (err) => {
            if (err) {
                res.json({ message: "Error to delete Comment,", error: err });
            } else {
                res.json({ message: "Delete Comment success." });
            }
        });
    } else {
        res.json({ message: "Comment not exist, can\'t delete." });
    }
}