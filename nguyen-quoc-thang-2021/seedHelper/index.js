const mongoose = require('mongoose');
const Comment = require('../models/comments');
const User = require('../models/users');
const PostBlog = require('../models/posts');
const commentDataset = require('./commentsDataset');
const userDataset = require('./usersDataset');
const postDataset = require('./postsDataset');

mongoose.connect('mongodb://localhost:27017/simpleBlog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('database connected');
});

const seedUser = async () => {
  await User.deleteMany({});
  for (let i = 0; i < userDataset.length; i++) {
    const users = new User({
      _id: `${userDataset[i].id}`,
      name: `${userDataset[i].name}`,
      username: `${userDataset[i].username}`,
      email: `${userDataset[i].email}`,
      address: {
        street: `${userDataset[i].address.street}`,
        suite: `${userDataset[i].address.suite}`,
        city: `${userDataset[i].address.city}`,
        zipcode: `${userDataset[i].address.zipcode}`,
        geo: {
          lat: `${userDataset[i].address.geo.lat}`,
          lng: `${userDataset[i].address.geo.lng}`,
        },
      },
      phone: `${userDataset[i].phone}`,
      website: `${userDataset[i].website}`,
      company: {
        name: `${userDataset[i].company.name}`,
        catchPhrase: `${userDataset[i].company.catchPhrase}`,
        bs: `${userDataset[i].company.bs}`,
      },
    });
    await users.save();
  }
  console.log('finised');
};

const seedPost = async () => {
  await PostBlog.deleteMany({});
  for (let i = 0; i < postDataset.length; i++) {
    const posts = new PostBlog({
      userId: `${postDataset[i].userId}`,
      _id: `${postDataset[i].id}`,
      title: `${postDataset[i].title}`,
      body: `${postDataset[i].body}`,
    });
    await posts.save();
  }
  console.log('finised');
};

const seedComment = async () => {
  await Comment.deleteMany({});

  for (let i = 0; i < commentDataset.length; i++) {
    const comments = new Comment({
      postId: `${commentDataset[i].postId}`,
      _id: `${commentDataset[i].id}`,
      name: `${commentDataset[i].name}`,
      email: `${commentDataset[i].email}`,
      body: `${commentDataset[i].body}`,
    });
    await comments.save();
  }
  console.log('finised');
};

// seedUser()
//   .then(seedPost())
//   .then(seedComment())
//   .then(() => {
//     mongoose.connection.close();
//   });
seedUser();
seedPost();
seedComment();
