require("dotenv").config();
const User = require("../models/user.model");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");
let fileUser = require("../../../data/users.json");
let fileComment = require("../../../data/comments.json");
let filePost = require("../../../data/posts.json");

async function initTableAndSyncData() {
    await Promise.all([
        User.sync({ force: true }),
        Post.sync({ force: true }),
        Comment.sync({ force: true }),
    ]);
    await Comment.bulkCreate(fileComment);
    await User.bulkCreate(fileUser);
    await Post.bulkCreate(filePost);
    process.exit(0);
}

initTableAndSyncData();
