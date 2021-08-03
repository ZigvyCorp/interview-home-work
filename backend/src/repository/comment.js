const { Comment } = require("../model/index");

const createComment = async ({ owner, post, content, created_at }) => {
  return await Comment.create({
    owner: owner,
    post: post,
    content: content,
    created_at: created_at,
  });
};

const updateComment = async ({ comment, owner, post, content }) => {
  return await Comment.findOneAndUpdate(
    { _id: comment },
    { content: content },
    { returnOriginal: false }
  );
};

const deleteComment = async ({ id }) => {
  return await Comment.deleteOne(id);
};

const findAllComment = async () => {
  return await Comment.find()
    .populate("post")
    .populate({ path: "post", populate: { path: "owner" } });
};

module.exports = {
  findAllComment,
  deleteComment,
  updateComment,
  createComment,
};
