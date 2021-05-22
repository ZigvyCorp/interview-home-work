const { db, dbErrors } = require("../../data");
const { Comment, Post } = db.models;

class CommentService {
  getComments(postId) {
    const post = Post.find((post) => post.id === postId);

    if (!post) {
      throw new dbErrors.NotFound(`GET - post ${postId} not found`);
    }
    return Comment.filter(({ post }) => post === postId);
  }

  getComment(id) {
    const comment = Comment.find((comment) => comment.id === id);
    if (!comment) {
      throw new dbErrors.NotFound(`GET - comment ${id} not found`);
    }
    return comment;
  }

  createComment(postId, fieldToCreate) {
    const post = Post.find((post) => post.id === postId);

    if (!post) {
      throw new dbErrors.NotFound(`GET - post ${postId} not found`);
    }

    const { owner, content } = fieldToCreate;
    const lastId = Comment[Comment.length - 1].id;
    const createComment = {
      id: lastId + 1,
      owner: owner || null,
      post: postId,
      content,
      created_at: Date.now(),
    };

    Comment.push(createComment);
    writeFileSync("src/data/comments.json", JSON.stringify(Comment));
    return createComment;
  }

  updateComment(id, fieldToUpdate) {
    const comment = Comment.find((comment) => comment.id === id);

    if (!comment) {
      throw new dbErrors.NotFound(`GET - comment ${id} not found`);
    }

    Object.assign(comment, fieldToUpdate);
    writeFileSync("src/data/comments.json", JSON.stringify(Comment));
  }

  deletePost(id) {
    const comment = Comment.find((comment) => comment.id === id);

    if (!comment) {
      throw new dbErrors.NotFound(`GET - comment ${id} not found`);
    }

    const result = Comment.find((comment) => comment.id !== id);

    writeFileSync("src/data/comments.json", JSON.stringify(result));
  }
}

module.exports = new CommentService();
