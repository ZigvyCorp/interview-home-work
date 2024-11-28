import Post from "../models/posts.model.js";

export const getPostData = async (req, res) => {
  try {
    const pageQuery = req.query;
    const { pageSize, pageIndex } = pageQuery;

    const postsData = await Post.find()
      .skip(pageSize * (pageIndex - 1))
      .limit(pageSize)
      .populate("author");

    const totalDocuments = await Post.countDocuments()

    return res.status(200).json({
      postsData,
      totalDocuments
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    const post = await Post.findOne({ postId }).populate("author");

    return res.status(200).json({
      post,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getPostByQueryKeyword = async (req, res) => {
  try {
    const keyword = req.query.keyword;

    const filterPost = await Post.find({
      title: { $regex: keyword, $options: "i" },
    });

    return res.status(200).json({
      post: filterPost,
    });
  } catch (error) {
    console.log("this is error");

    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
