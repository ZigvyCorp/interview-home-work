import { readFileSync } from 'fs';
import { DBConnect } from './models/configs/DBConnect.js';
import mongoose from 'mongoose';
import { Post } from './models/post.js';
import { User } from './models/user.js';
import { Comment } from './models/comment.js';

const convertToObjectId = (id) => new mongoose.Types.ObjectId(id).toString();

const updateModel = async (model, idField, data) => {
  for (const item of data) {
    await model.findOneAndUpdate(
      { _id: convertToObjectId(item[idField]) },
      item,
      { upsert: true, new: true }
    );
  }
};

const seedDatabase = async () => {
  try {
    await DBConnect();

    const dataPath = '../data/';

    const postData = JSON.parse(readFileSync(dataPath + 'posts.json', 'utf-8'));
    const userData = JSON.parse(readFileSync(dataPath + 'users.json', 'utf-8'));
    const commentData = JSON.parse(
      readFileSync(dataPath + 'comments.json', 'utf-8')
    );

    // Convert user ids to ObjectId
    for (const user of userData) {
      user._id = convertToObjectId(user.id);
      console.log(`Updated user ${user.id} _id to ${user._id}`);
    }
    await updateModel(User, '_id', userData);

    // Convert post ids to ObjectId
    for (const post of postData) {
      post._id = convertToObjectId(post.id);
      const user = userData.find((u) => u.id === post.owner);
      if (user) {
        post.owner = user._id;
        console.log(`Updated post ${post.id} owner to ${user._id}`);
      }
    }
    await updateModel(Post, '_id', postData);

    // Convert comment ids and post ids to ObjectId
    for (const comment of commentData) {
      comment._id = convertToObjectId(comment.id);
      const post = postData.find((p) => p.id === comment.post);
      const user = userData.find((u) => u.id === comment.owner);

      if (post) {
        const dbPost = await Post.findOneAndUpdate(
          { _id: post._id },
          {},
          { upsert: true, new: true }
        );
        if (dbPost) {
          comment.post = dbPost._id;
          console.log(`Updated comment ${comment.id} post to ${dbPost._id}`);
        }
      }

      if (user) {
        const dbUser = await User.findOneAndUpdate(
          { _id: user._id },
          {},
          { upsert: true, new: true }
        );
        if (dbUser) {
          comment.owner = dbUser._id;
          console.log(`Updated comment ${comment.id} owner to ${dbUser._id}`);
        }
      }
    }

    // Update comments in the database
    await updateModel(Comment, '_id', commentData);

    console.log('Database seeding completed');
    process.exit(0);
  } catch (err) {
    console.error(`DB Seeding Error: ${err.message}`);
    process.exit(1);
  }
};

seedDatabase();
