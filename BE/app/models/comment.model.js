// models/CommentModel.js
const comments = require("../data/comments.json");

class CommentModel {
  static getAllComments() {
    return comments;
  }

  static getCommentsByPostId(postId) {
    return comments.filter((comment) => comment.postId === postId);
  }

  static getCommentById(id) {
    return comments.find((comment) => comment.id === id);
  }

  static addComment(newComment) {
    comments.push(newComment);
  }

  static updateComment(updatedComment) {
    const index = comments.findIndex(
      (comment) => comment.id === updatedComment.id
    );
    if (index !== -1) {
      comments[index] = updatedComment;
    }
  }

  static deleteComment(id) {
    comments = comments.filter((comment) => comment.id !== id);
  }
}

module.exports = CommentModel;
