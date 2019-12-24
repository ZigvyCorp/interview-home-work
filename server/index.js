const express = require("express");
const app = express();
const path = require("path");
const ENVS = require("dotenv").config().parsed;
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid/v4");
const POSTS_PATH = path.resolve(__dirname, "../data/posts.json");
const USERS_PATH = path.resolve(__dirname, "../data/users.json");
const COMMENTS_PATH = path.resolve(__dirname, "../data/comments.json");
const { encode, decode } = require("./jwt");
const bearerToken = require("express-bearer-token");
const { readFile, writeFile } = require("./utils");

app.use(cors());
app.use(bearerToken());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(path.resolve(__dirname, "../public")));
app.use("/data", express.static(path.resolve(__dirname, "../data")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, "logo.png");
  }
});
const upload = multer({ storage: storage });

app.get("/posts", async (req, res) => {
  try {
    const posts = await readFile(POSTS_PATH);
    res.status(200).json([...posts.sort((a, b) => a.created_at < b.created_at)]);
  } catch (error) {
    res.status(500).json({
      error: "Some thing went wrong!"
    });
  }
});

app.get("/post/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const postsFactories = await readFile(POSTS_PATH);
    const usersFactories = await readFile(USERS_PATH);
    const post = postsFactories.find(item => item.id == id);
    if (!!post) {
      const users = usersFactories.find(item => post.owner == item.id);
      return res.status(200).json({
        ...post,
        users
      });
    }
    return res.status(404).json({
      status: 1,
      error: {
        message: "Post not found!"
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Some thing went wrong!"
    });
  }
});

app.get("/post/:id/comments", async (req, res) => {
  try {
    const id = req.params.id;
    const commentsFactories = await readFile(COMMENTS_PATH);
    res
      .status(200)
      .json([...commentsFactories.filter(item => item.post == id)]);
  } catch (error) {
    res.status(500).json({
      error: "Some thing went wrong!"
    });
  }
});

app.put("/post", async (req, res) => {
  try {
    const id = uuidv4();
    const token = req.token;
    const { id: userId } = await decode(token);
    const newPost = {
      ...req.body,
      owner: userId,
      id,
      created_at: new Date().getTime()
    };
    let postsFactories = await readFile(POSTS_PATH);
    postsFactories.push(newPost);
    const result = await writeFile(POSTS_PATH, JSON.stringify(postsFactories));
    res.status(200).json({
      id
    });
  } catch (error) {
    res.status(500).json({
      error: "Some thing went wrong!"
    });
  }
});

app.patch("/post", async (req, res) => {
  try {
    const { id: postId, title, content, tags } = req.body;
    let postsFactories = await readFile(POSTS_PATH);
    const postIndex = postsFactories.findIndex(item => item.id == postId);
    const updatePost = { ...postsFactories[postIndex], title, content, tags };
    postsFactories[postIndex] = { ...updatePost };
    const result = await writeFile(POSTS_PATH, JSON.stringify(postsFactories));
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

//comment

app.get("/comment/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const commentsFactories = await readFile(COMMENTS_PATH);
    const comment = commentsFactories.find(item => item.id == id);
    const { owner } = comment;
    const usersFactories = await readFile(USERS_PATH);
    const user = usersFactories.find(item => item.id == owner);
    res.status(200).json({
      ...comment,
      user
    });
  } catch (error) {
    res.status(500).json({
      error: "Some thing went wrong!"
    });
  }
});

//users

app.post("/users/sign-in", async (req, res) => {
  try {
    const { username, password } = req.body;
    const usersFactories = await readFile(USERS_PATH);
    const user = usersFactories.find(
      item =>
        item.username.trim() == username.trim() &&
        item.password.trim() == password.trim()
    );
    if (!!user) {
      delete user.password;
      const access_token = await encode(user);
      res.status(200).json({
        access_token
      });
    } else {
      return res.status(404).json({
        status: 1,
        error: {
          message: "Wrong username or password"
        }
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});

app.get("/users/auth", async (req, res) => {
  try {
    const token = req.token;
    const { id } = await decode(token);
    const usersFactories = await readFile(USERS_PATH);
    const user = usersFactories.find(item => item.id == id);
    delete user.password;
    res.status(200).json({
      ...user
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.get("/users/posts", async (req, res) => {
  try {
    const token = req.token;
    const { id } = await decode(token);
    const postsFactories = await readFile(POSTS_PATH);
    const posts = postsFactories.filter(item => item.owner == id);
    res.json([...posts]);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.delete("/users/post/:id", async (req, res) => {
  try {
    const token = req.token;
    const { id: userId } = await decode(token);
    const { id: postId } = req.params;
    const postsFactories = await readFile(POSTS_PATH);
    const post = postsFactories.find(item => item.id == postId);
    if (post.owner == userId) {
      const newPosts = postsFactories.filter(
        item => item.id != postId && item.owner == userId
      );
      const result = await writeFile(POSTS_PATH, JSON.stringify(newPosts));
      return res.status(200).json(newPosts);
    }
    return res.status(403).json({
      status: -1,
      error: {
        message: "Not authorized"
      }
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.listen(ENVS.SERVER_PORT, () =>
  console.log(`Server start at port: ${ENVS.SERVER_PORT}`)
);
