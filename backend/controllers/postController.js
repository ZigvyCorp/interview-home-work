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
    console.log("getPostOnPage");
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalPosts = await Post.countDocuments();
    const totalPage = Math.ceil(totalPosts / limit);

    const posts = await Post.aggregate([
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "postId",
          as: "comment",
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          body: 1,
          author: 1,
          "comment._id": 1,
        },
      },
      { $skip: startIndex },
      { $limit: limit },
    ]);
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
