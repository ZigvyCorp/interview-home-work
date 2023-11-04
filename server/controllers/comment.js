const axios = require("axios");
const { generatePaging, generatePagination } = require("../utils/pagination");

exports.getComments = async (req, res, next) => {
  try {

    const { page, limit, postId } = req.query;
    let url = `${process.env.EXTERNAL_API}/comments`
    if(postId) {
        url = `${process.env.EXTERNAL_API}/comments?postId=${postId}`
    }
    const commentRes = await axios.get(
      url
    );

    if (!commentRes) {
      const error = new Error("Could not find comments");
      error.statusCode = 404;
      throw error;
    }



    const {
      page: currentPage,
      limit: pageLimit,
      offset,
    } = generatePaging(page, limit);

    const comments = commentRes?.data?.slice(offset, offset + pageLimit);

    res.status(200).json({
      message: "Successfully get comment",
      data: comments,
      pagination: generatePagination(
        currentPage,
        commentRes?.data?.length,
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
