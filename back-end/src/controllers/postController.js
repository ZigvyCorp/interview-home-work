const { PostService } = require("../services");

const services = new PostService();
const createPost = async (req, res, next) => {
  try {
    const { owner, title, content, tags } = req.body;

    await services.create({ ownerId: owner, title, content, tags });

    res.status(200).json("Create Post Successful");
  } catch (error) {
    next(error);
  }
};
const findPosts = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const posts = await services.find({ page, limit });

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};
const findPostById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const existedUser = await services.findById({ id });

    res.status(200).json(existedUser);
  } catch (error) {
    next(error);
  }
};
const findPostByTitle = async (req, res, next) => {
  try {
    const title = req.query.title;

    const posts = await services.findByPostTitle({ query: title });

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};
const updatePostById = async (req, res, next) => {
  try {
    const { postId, ownerId, title, content, tags } = req.body;
    await services.update({ postId, ownerId, title, content, tags });

    res.status(200).json("Update Post Successful");
  } catch (error) {
    next(error);
  }
};
const deletePostById = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const existedUser = await services.deleteById({ id });

    res.status(200).json(existedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  findPostById,
  findPosts,
  updatePostById,
  deletePostById,
  findPostByTitle,
};
