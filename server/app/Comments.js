const errorHandler = require('../utils/APIError');
const mComments = require('../models/Comments');

module.exports.createComment = async (req, res, next) => {
  try {
    for (let i = 0; i < mComments.requireField.length; i++) {
      const field = mComments.requireField[i];
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

    let newComment = {
      owner: req.user.id,
      post: req.body.postId,
      content: req.body.content
    };
    let createdComment = await mComments.create(newComment);
    return res.status(200).json({
      code: 200,
      data: {
        post: createdComment,
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

module.exports.updateComment = async (req, res, next) => {
  try {
    for (let i = 0; i < mComments.editableField.length; i++) {
      const field = mComments.editableField[i];
      if (!req.body[field]) {
        return res
          .status(400)
          .json(
            errorHandler.APIError(`${field} is require to update comment`, 400)
          );
      }
    }
    let commentInfo = await mComments.findOne({ _id: req.body.commentId });
    if (!commentInfo) {
      return res
        .status(400)
        .json(errorHandler.APIError(`Comment don't exits`, 400));
    }
    if (commentInfo.owner != req.user.id) {
      return res
        .status(403)
        .json(
          errorHandler.APIError(
            `You don't have permission to do this action`,
            403
          )
        );
    }
    commentInfo.content = req.body.content;
    await commentInfo.save();
    return res.status(200).json({
      code: 200,
      data: {
        comment: commentInfo,
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

module.exports.deleteComment = async (req, res, next) => {
  try {
    let commentInfo = await mComments.findOne({ _id: req.body.CommentId });
    if (!commentInfo) {
      return res
        .status(400)
        .json(errorHandler.APIError(`Comment don't exits`, 400));
    }
    if (commentInfo.owner != req.user.id) {
      return res
        .status(403)
        .json(
          errorHandler.APIError(
            `You don't have permission to do this action`,
            403
          )
        );
    }
    await commentInfo.remove();
    return res.status(200).json({
      code: 200,
      message: 'You have successfully deleted comment.',
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

module.exports.listComments = async (req, res, next) => {
  try {
    const limit = req.body.limit ? req.body.limit : req.query.limit;
    const offset = req.body.offset ? req.body.offset : req.query.offset;
    comments = await mComments
      .find()
      .sort([['createdAt', -1]])
      .limit(parseInt(limit))
      .skip(parseInt(offset));
    return res.status(200).json({
      code: 200,
      data: {
        comments: comments,
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
