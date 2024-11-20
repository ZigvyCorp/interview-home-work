const axios = require("axios");
const { generatePaging, generatePagination } = require("../utils/pagination");

exports.getPosts = async (req, res, next) => {
  try {
    const [postRes, usersRes, commentsRes] = await Promise.all([
      axios.get(`${process.env.EXTERNAL_API}/posts`),
      axios.get(`${process.env.EXTERNAL_API}/users`),
      axios.get(`${process.env.EXTERNAL_API}/comments`)
    ]);

    if (!postRes) {
      const error = new Error("Could not find post");
      error.statusCode = 404;
      throw error;
    }

    const { page, limit, title } = req.query;

    const {
      page: currentPage,
      limit: pageLimit,
      offset,
    } = generatePaging(page, limit);

    let postsResult = postRes?.data;

    if (title) {
      postsResult = postsResult.filter((p) => {
        return p.title.includes(title);
      });
    }

    postsResult = postsResult.slice(offset, offset + pageLimit);

    postsResult = postsResult.map((p) => {
      const user = usersRes.data.find((user) => user.id === p.userId);
      const comments = commentsRes.data.filter((c) => c.postId === p.id);
      return { ...p, user, comments };
    });

    res.status(200).json({
      message: "Successfully get post",
      data: postsResult,
      pagination: generatePagination(
        currentPage,
        postRes?.data?.length,
        pageLimit
      ),
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const postRes = await axios.get(
      `${process.env.EXTERNAL_API}/posts/${req.params.postId}`
    );

    if (!postRes) {
      const error = new Error("Could not find post");
      error.statusCode = 404;
      throw error;
    }

    let postResult = postRes?.data;

    if (postRes) {
      const usersRes = await axios.get(
        `${process.env.EXTERNAL_API}/users/${postRes?.data?.userId}`
      );

      const commentsRes = await axios.get(
        `${process.env.EXTERNAL_API}/comments?postId=${postRes?.data?.id}`
      );

      const user = usersRes?.data;
      const comments = commentsRes?.data;
      postResult = { ...postResult, user, comments };
    }

    res.status(200).json({
      message: "Successfully get post",
      data: postResult,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
