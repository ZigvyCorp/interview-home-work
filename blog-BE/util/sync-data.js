const prisma = require("./prisma");
const { isEmpty } = require("lodash");
const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");

function syncPostData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      const posts = [...json].map(
        (post) => new Post(post.title, post.body, post.userId),
      );

      return prisma.post.createMany({
        data: posts,
      });
    });
}

function syncUserData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      const users = [...json].map((user) => {
        return new User(user.name, user.email, user.username);
      });

      return prisma.user.createMany({
        data: users,
      });
    });
}

function syncCommentData() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => {
      const comments = [...json].map((comment) => {
        return new Comment(
          comment.name,
          comment.email,
          comment.body,
          comment.postId,
        );
      });

      return prisma.comment.createMany({
        data: comments,
      });
    });
}

const syncDataFromJsonServer = () =>
  new Promise(async (resolve, reject) => {
    try {
      const posts = await prisma.post.findMany();
      const users = await prisma.user.findMany();
      const comments = await prisma.comment.findMany();
      if (isEmpty(users)) {
        syncUserData();
      }

      if (isEmpty(posts)) {
        syncPostData();
      }

      if (isEmpty(comments)) {
        syncCommentData();
      }

      resolve();
    } catch (error) {
      reject(error);
    }
  });

module.exports = syncDataFromJsonServer;
