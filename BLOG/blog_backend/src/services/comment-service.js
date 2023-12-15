const { commentModel } = require("../models");

(function () { 
  const comment = commentModel;

  exports.createComment = function (data, callback) {
    comment.create(data).then(
      (response) => {
        callback(null, response);
      },
      (error) => {
        callback(error, null);
      }
    );
  };

  exports.findCommentByUserId = function (query, callback) {
    comment.find(query, callback);
  };

  exports.updateCommentById = function (id, data, callback) {
    comment.findByIdAndUpdate(
      {
        _id: id,
      },
      data,
      (err, response) => {
        callback(err, response);
      }
    );
  };

  exports.updateComment = function (query, data, options, callback) {
    comment.findOneAndUpdate(query, data, options, (err, response) => {
      callback(err, response);
    });
  };

  exports.deleteComment = function (query, callback) {
    comment.deleteOne(query, callback);
  };

 
})();
