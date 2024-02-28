const { getALlUser, addUser, login } = require("../repository/user");
const {
  createPost,
  updatePost,
  deletePost,
  findAllPost,
} = require("../repository/post");
const {
  findAllComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../repository/comment");

//! User
const getUser = async (req, res) => {
  res.send(await getALlUser());
};

const registerUser = async (req, res) => {
  res.send(await addUser(req.body));
};
const validation = async (req, res) => {
  res.send(await login(req.body));
};

//! Comment

const getComment = async (req, res) => {
  res.send(await findAllComment());
};
const fixComment = async (req, res) => {
  res.send(await updateComment(req.body));
};
const eraseComment = async (req, res) => {
  res.send(await deleteComment(req.body));
};
const makeComment = async (req, res) => {
  res.send(await createComment(req.body));
};

//! Post

const getPost = async (req, res) => {
  res.send(await findAllPost());
};

const makePost = async (req, res) => {
  console.log(req.body);
  res.send(await createPost(req.body));
};
const fixPost = async (req, res) => {
  res.send(await updatePost(req.body));
};
const erasePost = async (req, res) => {
  res.send(await deletePost(req.body));
};

module.exports = {
  getUser,
  getPost,
  getComment,
  registerUser,
  fixComment,
  eraseComment,
  makeComment,
  makePost,
  fixPost,
  erasePost,
  validation,
};