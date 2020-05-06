const errorHandler = require('../utils/APIError');
const mPosts = require('../models/Posts');

module.exports.createPost = async (req, res, next) => {
  try {
    for (let i = 0; i < mPosts.requireField.length; i++) {
      const field = mPosts.requireField[i];
      if (!req.body[field]) {
        return res
          .status(400)
          .json(
            errorHandler.APIError(
              `Please input ${field}, ${field} is required field`,
              400
            )
          );
      }
    }

    let newPost = {
      owner: req.user.id,
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
    };
    let createdPost = await mPosts.create(newPost);
    return res.status(200).json({
      code: 200,
      data: {
        post: createdPost,
      },
    });
  } catch (e) {
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
};

module.exports.updatePost = async (req, res, next) => {
  try {
    for (let i = 0; i < mPosts.editableField.length; i++) {
      const field = mPosts.editableField[i];
      if (!req.body[field]) {
        return res
          .status(400)
          .json(
            errorHandler.APIError(`${field} is require to update post`, 400)
          );
      }
    }
    let postInfo = await mPosts.findOne({ _id: req.body.postId });
    if (!postInfo) {
      return res
        .status(400)
        .json(errorHandler.APIError(`Post don't exits`, 400));
    }
    if (postInfo.owner != req.user.id) {
      return res
        .status(403)
        .json(
          errorHandler.APIError(
            `You don't have permission to do this action`,
            403
          )
        );
    }
    postInfo.title = req.body.title;
    postInfo.content = req.body.content;
    postInfo.tags = req.body.tags;
    await postInfo.save();
    return res.status(200).json({
      code: 200,
      data: {
        post: postInfo,
      },
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
};

module.exports.deletePost = async (req, res, next) => {
  try {
    let postInfo = await mPosts.findOne({ _id: req.body.postId });
    if (!postInfo) {
      return res
        .status(400)
        .json(errorHandler.APIError(`Post don't exits`, 400));
    }
    if (postInfo.owner != req.user.id) {
      return res
        .status(403)
        .json(
          errorHandler.APIError(
            `You don't have permission to do this action`,
            403
          )
        );
    }
    await postInfo.remove();
    return res.status(200).json({
      code: 200,
      message: 'You have successfully deleted post.',
    });
  } catch (e) {
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
};

module.exports.postDetails = async (req, res, next) => {
  try {
    postId = req.body.postId ? req.body.postId : req.query.postId;
    let postInfo = await mPosts.findOne({ _id: req.body.postId });
    if (!postInfo) {
      return res
        .status(400)
        .json(errorHandler.APIError(`Post don't exits`, 400));
    }
    return res.status(200).json({
      code: 200,
      data: {
        post: postInfo,
      },
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
};

module.exports.listPosts = async (req, res, next) => {
  try {
    const limit = req.body.limit ? req.body.limit : req.query.limit;
    const offset = req.body.offset ? req.body.offset : req.query.offset;
    posts = await mPosts
      .find()
      .sort([['createdAt', -1]])
      .limit(parseInt(limit))
      .skip(parseInt(offset));
    return res.status(200).json({
      code: 200,
      data: {
        posts: posts,
      },
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
};
