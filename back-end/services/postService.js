import Post from '../models/postModel.js';

export const getAllPost = async (params) => {
  try {
    const {
      key,
      page = 1,
      limit = 5,
      sort = 'createdAt',
      order = 'desc',
    } = params;

    const conditions = {};
    if (key) {
      conditions.title = { $regex: key, $options: 'i' };
    }

    const total = await Post.countDocuments(conditions);
    const totalPages = Math.ceil(total / limit);

    const posts = await Post.find(conditions)
      .sort({ [sort]: order })
      .skip((page - 1) * limit)
      .limit(limit);

    const pagination = {
      limit,
      page: +page,
      totalPages,
      totalRows: total
    };

    return { data: posts, pagination };
  } catch (error) {
    return error;
  }
};

export const getPost = async (postId) => {
  try {
    return await Post.findOne({ _id: postId });
  } catch (error) {
    return error;
  }
};

export const createPost = async (post) => {
  try {
    const { userId, title, body } = post;
    const newPost = new Post({ userId, title, body });
    return await newPost.save();
  } catch (error) {
    return error;
  }
};

export const updatePost = async (postId, post) => {
  try {
    const newPost = await Post.findOneAndUpdate(
      { _id: postId },
      { $set: post },
      { new: true }
    );
    return newPost;
  } catch (error) {
    return error;
  }
};

export const deletePost = async (postId) => {
  try {
    const post = await Post.findOneAndDelete({ _id: postId });
    return post;
  } catch (error) {
    return error;
  }
};
