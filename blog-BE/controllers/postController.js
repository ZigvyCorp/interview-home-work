//Get all Post
const { parseInt } = require("lodash");
const isStringNumber = require("../util/lodash");
const prisma = require("../util/prisma");

const Post = require("../models/post");

const getAllPosts = (req, res) => {
  const paginator = {
    page: req.query.page
      ? isStringNumber(req.query.page)
        ? parseInt(req.query.page)
        : undefined
      : undefined,
    perPage: req.query.perPage
      ? isStringNumber(req.query.perPage)
        ? parseInt(req.query.perPage)
        : undefined
      : undefined,
  };

  const search =
    req.query.search != "null" && req.query.search != ""
      ? req.query.search?.split(" ").join(" &")
      : undefined;

  console.log(search);

  prisma.post
    .findMany({
      where: {
        title: { search },
      },
      skip: (paginator.page - 1) * paginator.perPage,
      take: paginator.perPage,
      include: { user: true, comments: true },
    })
    .then((posts) => {
      return res.json({ success: "true", data: { ...paginator, posts } });
    })
    .catch((err) => {
      return res.status(500).json({ success: "false", err });
    });
};

const createPost = (req, res) => {
  const { title, body, userId } = req.body;
  prisma.user
    .findUnique({
      where: {
        id: userId,
      },
    })
    .then(async (user) => {
      if (!user) {
        return res
          .status(404)
          .json({ success: "false", mess: "User cannot found" });
      } else {
        const newPost = new Post(title, body, userId);
        const result = await prisma.post.create({
          data: newPost,
        });
        return res.status(200).json({ success: "true", data: result });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: "false", err });
    });
};

const getPost = (req, res) => {
  const postId = parseInt(req.params.id);
  prisma.post
    .findUnique({
      where: {
        id: postId,
      },
    })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .json({ success: "false", mess: "Post cannot find" });
      } else {
        return res.json({ success: "true", data });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: "false", err });
    });
};

const editPost = (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, body } = req.body;

  prisma.post
    .findUnique({
      where: {
        id: postId,
      },
    })
    .then(async (post) => {
      if (!post) {
        res.status(404).json({ success: "false", mess: "Post cannot find" });
      } else {
        const data = await prisma.post.update({
          where: { id: postId },
          data: {
            title,
            body,
          },
        });

        return res.json({ success: "true", data });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: "false", err });
    });
};

const deletePost = (req, res) => {
  const postId = parseInt(req.params.id);

  prisma.post
    .findUnique({
      where: {
        id: postId,
      },
    })
    .then(async (post) => {
      if (!post) {
        return res
          .status(404)
          .json({ success: "false", mess: "Post cannot find" });
      } else {
        const data = await prisma.post.delete({
          where: { id: postId },
        });
        return res.json({ success: "true", data });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: "false", err });
    });
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  editPost,
  deletePost,
};
