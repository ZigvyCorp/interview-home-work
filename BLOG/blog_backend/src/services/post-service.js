const { postModel } = require("../models");
const { commentModel } = require("../models");

(function () {
  const post = postModel;

  exports.createPost = function (data, callback) {
    post.create(data).then(
      (response) => {
        callback(null, response);
      },
      (error) => {
        callback(error, null);
      }
    );
  };

  exports.findPostsAndCount = async (query, options, callback) => {
    const totalPosts = await post.countDocuments(query);
    const totalPages = Math.ceil(totalPosts / options.limit);
    const currentPage = options.skip / options.limit + 1;

    post
      .find(query, null, options)
      .lean()
      .populate({
        path: "comments.user",
        model: "User",
        select: "name",
      })
      .populate({
        path: "user",
        model: "User",
        select: "name",
      })
      .exec()
      .then((result) => {
        if (result) {
          const responseQuery = {
            posts: result,
            totalPages,
            currentPage,
          };
          callback(null, responseQuery);
        } else {
          callback(null, null);
        }
      })
      .catch((error) => {
        callback(error);
      });
  };

  exports.findPostById = function (postId, callback) {
    post
      .findById(postId)
      .lean()
      .populate({
        path: "comments.user",
        model: "User",
        select: "name",
      })
      .populate({
        path: "user",
        model: "User",
        select: "name",
      })
      .exec()
      .then((result) => {
        if (result) {
          callback(null, result);
        } else {
          callback(null, null);
        }
      })
      .catch((error) => {
        callback(error);
        return false;
      });
    return true;
  };

  exports.updatePostById = function (id, data, callback) {
    post.findByIdAndUpdate(
      {
        _id: id,
      },
      data,
      (err, response) => {
        callback(err, response);
      }
    );
  };

  exports.deletePostById = function (id, callback) {
    post.findByIdAndDelete(
      {
        _id: id,
      },
      data,
      (err, response) => {
        callback(err, response);
      }
    );
  };

  exports.addComment = async ({ postId, userId, body }, callbackService) => {
    try {
      const postItem = await postModel.findById(postId).exec();

      if (!postItem) {
        return callbackService({ message: "Post not found" });
      }

      const newComment = new commentModel({
        user: userId,
        body,
      });

      postItem.comments.push(newComment);
      const result = await postItem.save();

      if (result) {
        callbackService(null, result);
      } else {
        callbackService({ message: "Failed to save comment" });
      }
    } catch (error) {
      console.error(error);
      callbackService({ message: "Internal server error" });
    }
  };
})();
