const User = require("../models/user.model");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

const asyncHandler = require("express-async-handler");

const createPost = asyncHandler(async (req, res) => {
  const response = await Post.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    post: response ? response : "Cannot create new post",
  });
});

const updatePost = asyncHandler(async (req, res) => {
  const { pId } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("missing inputs");

  const response = await Post.findByIdAndUpdate(pId, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: response ? true : false,
    updatedPost: response ? response : `Cannot update Post ${pId}`,
  });
});

const getPostById = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  const post = await Post.findById(pid);
  return res.status(200).json({
    sucess: post ? true : false,
    post: post ? post : "Can't get product",
  });
});

//filtering, sorting & pagination
const getAllPosts = asyncHandler(async (req, res) => {
  const queries = { ...req.query };
  // Tach' cac' truong` dac biet ra khoi query
  const excludeFields = ["limit", "sort", "page", "fields"];
  excludeFields.forEach((field) => delete queries[field]);

  // Format lai cac operator cho dung cu phap cua mongoose
  let queryString = JSON.stringify(queries);
  queryString = queryString.replace(
    /\b(gte|gt|lt|lte)\b/g,
    (matchedEl) => `$${matchedEl}`
  );
  const formatedQueries = JSON.parse(queryString);

  // ****Filtering***

  // tim theo title khong can phai danh ca ten van tim dc
  if (queries?.title) {
    formatedQueries.title = { $regex: queries.title, $options: "i" };
  }

  let queryCommand = Post.find(formatedQueries);

  // ***Sorting***

  //abc,efg => [abc, efg] => abc efg
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    // queryCommand = queryCommand.sort('quantity title')
    queryCommand = queryCommand.sort(sortBy);
  }

  // ***fields limiting***
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    queryCommand = queryCommand.select(fields);
  }

  // ***pagination***
  // + Limit: số object: lấy về 1 gọi API
  // skip: 2
  // 1 2 3 ... 10
  // +2 => 2
  // +dadasd => NaN
  const page = +req.query.page || 1; // mac dinh là 1 nếu không truyền giá trị
  const limit = +req.query.limit || process.env.LIMIT_PRODUCTS;
  const skip = (page - 1) * limit;

  queryCommand.skip(skip).limit(limit);

  try {
    const response = await queryCommand;
    const counts = await Post.find(formatedQueries).countDocuments();

    return res.status(200).json({
      success: response ? true : false,
      counts,
      posts: response ? response : "Cannot get products",
    });
  } catch (err) {
    console.log(err.message); // Hoặc xử lý lỗi theo cách bạn muốn
  }
});

const getCommentByPostId = asyncHandler(async (req, res) => {
  const { pId } = req.params;
  const comment = await Comment.find({ postId: pId }).populate("authorId");

  return res.status(200).json({
    sucess: comment ? true : false,
    comment: comment ? comment : `Can't get comment in post ̀${pId}`,
  });
});

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  getCommentByPostId,
};
