import Post from "../Models/Post.js";

export const createPost = async (req, res, next) => {
  try {
    const { title, body, tags, author } = req.body;

    if (!title || !body || !author) {
      return res
        .status(400)
        .json({ error: "Title, body, and author are required fields." });
    }

    const newPost = await Post.create({
      title,
      body,
      tags,
      author,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getPostOnPage = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalPosts = await Post.countDocuments();
    const totalPage = Math.ceil(totalPosts / limit);

    const posts = await Post.find()
      .populate("author", "userName _id")
      .skip((page - 1) * limit)
      .limit(limit);

    const pagination = {};
    if (endIndex < totalPosts) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    res.status(200).json({
      success: true,
      data: posts,
      pagination: {
        totalPage: totalPage,
        ...pagination,
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const searchPostByTitle = async function (req, res) {
  try {
    const { title } = req.query;

    if (!title) {
      return res.status(400).json({
        status: "error",
        message: "Title is required for search.",
      });
    }

    const posts = await Post.find({ title: new RegExp(title, "i") }).populate(
      "author",
      "userName _id"
    );

    res.status(200).json({
      status: "success",
      data: posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
};
