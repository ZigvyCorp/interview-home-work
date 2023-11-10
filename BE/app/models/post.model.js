// models/Post.js
const posts = require("../data/posts.json")

class PostModel {
  static getAllPosts() {
    return posts;
  }

  static getPostById(id) {
    return posts.find((post) => post.id === id);
  }

  static addPost(newPost) {
    posts.push(newPost);
  }

  static updatePost(updatedPost) {
    const index = posts.posts.findIndex((post) => post.id === updatedPost.id);
    if (index !== -1) {
      posts[index] = updatedPost;
    }
  }

  static deletePost(id) {
    posts = posts.filter((post) => post.id !== id);
  }
}

module.exports = PostModel;
