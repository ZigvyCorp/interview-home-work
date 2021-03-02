import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import posts from './data/posts.js';
import User from './models/userModel.js';
import Post from './models/postModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Post.deleteMany();
    await User.deleteMany();

    await User.insertMany(users);
    await Post.insertMany(posts);

    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // Exit with failure
  }
};

const destroyData = async () => {
  try {
    await Post.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // Exit with failure
  }
};

const importDataPost = async () => {
  try {
    await Post.insertMany(posts);

    console.log('All posts imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // Exit with failure
  }
};

const destroyDataPost = async () => {
  try {
    await Post.deleteMany();

    console.log('All posts destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // Exit with failure
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else if (process.argv[2] === '-ipost') {
  importDataPost();
} else if (process.argv[2] === '-dpost') {
  destroyDataPost();
} else {
  importData();
}
