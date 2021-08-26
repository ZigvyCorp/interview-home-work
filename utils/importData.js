const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/userModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

const DB = 'mongodb://localhost:27017/interview';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful! 👌'));

// READ JSON FILE
const posts = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, `../data/posts.json`), 'utf-8')
);
const users = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, `../data/users.json`), 'utf-8')
);
const comments = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, `../data/comments.json`), 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Post.create(posts);
    await User.create(users, { validateBeforeSave: false });
    await Comment.create(comments);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Post.deleteMany();
    await User.deleteMany();
    await Comment.deleteMany();
    console.log('Data successfully deleted! ✔');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// RUN
if (process.argv[2] === '--import') {
  // node utils/importData.js --import
  importData();
} else if (process.argv[2] === '--delete') {
  // node utils/importData.js --delete
  deleteData();
}
