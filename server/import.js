const bcrypt = require('bcrypt');

require('./models/db.js');

const mUsers = require('./models/Users');
const mPosts = require('./models/Posts');
const mComments = require('./models/Comments');

const userDummy = require('../data/users.json');
const postDummy = require('../data/posts.json');
const commentDummy = require('../data/comments.json');

async function createData() {
  const saltRounds = 10;
  // Drop all Users If Exists
  await mUsers.deleteMany({});
  let createdUsers = [];
  // Import
  for (let i = 0; i < userDummy.length; i++) {
    let user = userDummy[i];
    // Encrypting password
    var salt = bcrypt.genSaltSync(saltRounds);
    var hashedPassword = bcrypt.hashSync(user.password, salt);
    user.password = hashedPassword;
    user.tempId = user.id;
    delete user['id'];
    let createdUser = await mUsers.create(user);
    user.id = createdUser.id;
    createdUsers.push(user);
  }
  // Drop all Posts If Exists
  await mPosts.deleteMany({});
  let createdPosts = [];
  // Import
  for (let i = 0; i < postDummy.length; i++) {
    let post = postDummy[i];
    post.tempId = post.id;
    delete post['id'];
    for (let i = 0; i < createdUsers.length; i++) {
      const user = createdUsers[i];
      if (post.owner == user.tempId) {
        post.owner = user.id;
      }
    }
    let createdPost = await mPosts.create(post);
    post.id = createdPost.id;
    createdPosts.push(post);
  }
  // Drop all Posts If Exists
  await mComments.deleteMany({});
  // Import
  for (let i = 0; i < commentDummy.length; i++) {
    let comment = commentDummy[i];
    for (let i = 0; i < createdUsers.length; i++) {
      const user = createdUsers[i];
      if (comment.owner == user.tempId) {
        comment.owner = user.id;
      }
    }
    for (let i = 0; i < createdPosts.length; i++) {
      const post = createdPosts[i];
      if (comment.post == post.tempId) {
        comment.post = post.id;
      }
    }
    let createdComment = await mComments.create(comment);
  }
  console.log('Import Done')
}

createData();
