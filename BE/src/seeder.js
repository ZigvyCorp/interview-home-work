import { readFileSync } from 'fs';
import { DBConnect } from './models/configs/DBConnect.js';
import { Post } from './models/post.js';
import { User } from './models/user.js';
import { Comment } from './models/comment.js';

const seedDatabase = async () => {
  try {
    await DBConnect();
    const postData = JSON.parse(readFileSync('../data/posts.json', 'utf-8'));
    const userData = JSON.parse(readFileSync('../data/users.json', 'utf-8'));
    const commentData = JSON.parse(
      readFileSync('../data/comments.json', 'utf-8')
    );

    for (const item of postData) {
      await Post.findOneAndUpdate({ _id: item.id }, item, { upsert: true });
    }

    for (const item of userData) {
      await User.findOneAndUpdate({ _id: item.id }, item, { upsert: true });
    }

    for (const item of commentData) {
      await Comment.findOneAndUpdate({ _id: item.id }, item, { upsert: true });
    }

    console.log('Database seeding completed');
    process.exit(0);
  } catch (err) {
    console.error(`DB Seeding Error: ${err.message}`);
    process.exit(1);
  }
};

seedDatabase();
