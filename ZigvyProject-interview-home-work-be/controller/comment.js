const User = require("../models/user.model");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

const asyncHandler = require("express-async-handler");

const createComment = asyncHandler(async (req, res) => {
  const { postId, body, authorId } = req.body;
  console.log(req.body);
  // Tìm bài viết với postId tương ứng
  const post = await Post.findById(postId);
  const user = await User.findById(authorId);
  if (!post) {
    return res
      .status(404)
      .json({ success: false, message: "Không tìm thấy bài viết" });
  }
  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: "Không tìm thấy user" });
  }
  // Tạo comment
  const response = await Comment.create(req.body);
  if (response) {
    const postId = response.postId;
    const commentId = response._id;
    const updatePost = await Post.findByIdAndUpdate(
      postId,
      {
        $push: { comments: commentId },
      },
      { new: true }
    );
    return res.status(200).json({
      success: response ? true : false,
      comment: response ? response : "Cannot create new comment",
    });
  }

  // Tạo một đối tượng comment mới
  //   const comment = {

  //   };
  //   // Thêm comment vào mảng comments của post
  //   post.comments.push(comment);

  //   // Lưu lại bài viết đã được cập nhật với comment mới
  //   await post.save();

  //   return res.status(201).json({ success: true, comment });
});

module.exports = {
  createComment,
};
