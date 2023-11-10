const PostModel = require("../models/posts.model");
const UserModel = require("../models/users.model");
const CommentModel = require("../models/comments.model");

const listPost = async (req, res, next) => {
  try {
    const { page, limit, search } = req.query;
    const posts = await PostModel.getListPost(page, limit, search);
    const total_record = posts.total_record;

    const data = {
      total: total_record,
      data: posts.data,
      page,
      limit,
    };

    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await PostModel.getPostDetail(id);

    const comment = await CommentModel.getCommentDetail(post.data.id);
    const user = await UserModel.getUserDetail(post.data.userId);

    post.data.author = user.data.name;
    post.data.comment = comment.data;
    
    res.send(post.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  listPost,
  postDetail,
};
