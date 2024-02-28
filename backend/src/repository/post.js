const { Post } = require("../model/index");

const createPost = async ({ owner, title, content, create_at, tags }) => {
  return await Post.create({
    owner: owner,
    title: title,
    content: content,
    created_at: create_at,
    tags: tags,
  });
};

const updatePost = async ({ post, owner, title, content, tags }) => {
  return await Post.findOneAndUpdate(
    { _id: post },
    {
      owner: owner,
      title: title,
      content: content,
      tags: tags,
    },
    {
      returnOriginal: false,
    }
  );
};

const deletePost = async ({ id }) => {
  return Post.deleteOne({ _id: id });
};

const findAllPost = async () => {
  return await Post.find().populate("owner");
};

module.exports = { createPost, updatePost, deletePost, findAllPost };
