module.exports = class Comment {
  constructor(name, email, body, postId) {
    this.name = name;
    this.body = body;
    this.email = email;
    this.postId = postId;
  }
};
