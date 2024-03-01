module.exports = { commentView, commentsView };

function commentView(comment) {
  return {
    ...comment,
    id: comment._id,
    body: comment.content,
    name: comment.owner.name,
    username: comment.owner.username,
    owner: comment.owner._id,
    _id: undefined,
    content: undefined,
  };
}

function commentsView(comments) {
  return comments.map(comment => commentView(comment));
}
