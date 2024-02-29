const asyncHandler = require("express-async-handler");
const Post = require("../models/post");
const User = require("../models/user");
const Comment = require("../models/comment");

const fakeUsers = asyncHandler(async (req, res) => {
  try {
    // Tạo dữ liệu giả mạo cho User
    const users = [];
    for (let i = 0; i < 5; i++) {
      const user = {
        username: "user-" + i,
        password: 123,
        name: "user-" + i,
        dob: "",
        created_at: 1576506719083,
      };
      users.push(user);
    }
    await User.insertMany(users);

    return res
      .status(200)
      .json({ success: true, mes: "fake data successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, mes: error.message });
  }
});

// tao fake data post

const fakePosts = asyncHandler(async (req, res) => {
  try {
    // Tạo dữ liệu giả mạo cho User
    const users = await User.find();
    const fakePosts = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 5);
      const fakePost = {
        owner: users[randomNumber]._id,
        title: "Blog No: " + i,
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, neque architecto cumque cum, expedita facere excepturi fugiat quia iusto, illo sunt sapiente mollitia? Facilis aspernatur non, sequi cum alias dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, neque architecto cumque cum, expedita facere excepturi fugiat quia iusto, illo sunt sapiente mollitia? Facilis aspernatur non, sequi cum alias dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, neque architecto cumque cum, expedita facere excepturi fugiat quia iusto, illo sunt sapiente mollitia? Facilis aspernatur non, sequi cum alias dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, neque architecto cumque cum, expedita facere excepturi fugiat quia iusto, illo sunt sapiente mollitia? Facilis aspernatur non, sequi cum alias dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, neque architecto cumque cum, expedita facere excepturi fugiat quia iusto, illo sunt sapiente mollitia? Facilis aspernatur non, sequi cum alias dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, neque architecto cumque cum, expedita facere excepturi fugiat quia iusto, illo sunt sapiente mollitia? Facilis aspernatur non, sequi cum alias dolorum.",
        created_at: 1576506719083,
        tags: ["a", "b", "c"],
      };
      fakePosts.push(fakePost);
    }

    const rs = await Post.insertMany(fakePosts);

    return res
      .status(200)
      .json({ success: true, mes: "fake data successfully", data: rs.data });
  } catch (error) {
    return res.status(500).json({ success: false, mes: error.message });
  }
});

// fake comments
const fakeComments = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    const posts = await Post.find();
    const comments = [];
    for (let i = 0; i < 10; i++) {
      const randomUserId = Math.floor(Math.random() * 5);
      const randomPostId = Math.floor(Math.random() * 10);
      const comment = {
        owner: users[randomUserId]._id,
        post: posts[randomPostId]._id,
        content: "Very good, awesome",
        created_at: 1576506719083,
      };
      comments.push(comment);
    }
    await Comment.insertMany(comments);

    return res
      .status(200)
      .json({ success: true, mes: "fake data successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, mes: error.message });
  }
});

module.exports = { fakeUsers, fakePosts, fakeComments };
