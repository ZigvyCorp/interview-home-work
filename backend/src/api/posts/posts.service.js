const { db, dbErrors } = require("../../data");
const { writeFileSync } = require("fs");
const { Post, Comment } = db.models;

class PostService {
  getPosts() {
    return Post;
  }

  getPost(id) {
    const post = Post.find((post) => post.id === id);
    if (!post) {
      throw new dbErrors.NotFound();
    }
    return post;
  }

  getComments(id) {
    const post = Post.find((post) => post.id === id);

    if (!post) {
      throw new dbErrors.NotFound();
    }

    const comments = Comment.filter(({ post }) => post === id);
    return comments;
  }

  createPost(fieldToCreate) {
    const { owner, title, content, tags } = fieldToCreate;
    const lastId = Post[Post.length - 1].id;

    const createdPost = {
      id: lastId + 1,
      owner: owner || null,
      title: title || "",
      content: content || "",
      created_at: Date.now(),
      tags: tags || [],
    };

    Post.push(createdPost);
    
    writeFileSync("src/data/posts.json", JSON.stringify(Post));
    return createdPost;
  }

  updatePost(id, fieldsToUpdate) {
    const post = Post.find((post) => post.id === id);

    if (!post) {
      throw new dbErrors.NotFound();
    }

    Object.assign(post, fieldsToUpdate);
    writeFileSync("src/data/posts.json", JSON.stringify(Post));
  }

  deletePost(id){
    const post = Post.find((post) => post.id === id);

    if (!post) {
      throw new dbErrors.NotFound();
    }

    const result = Post.filter(post => post.id !== id)

    writeFileSync("src/data/posts.json", JSON.stringify(result));
  }
}

module.exports =new PostService