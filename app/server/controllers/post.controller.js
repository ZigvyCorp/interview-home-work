const Post = require("../models/post.schema");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("../utils/handlerFactory");

exports.list = catchAsync(async (req, res, next) => {
  let { page, page_size, search } = req.query;

  try {
    let query = {};

    if (search) {
      query.title = search;
    }

    let pageSize = Number(page_size);
    if (!page_size) {
      pageSize = 10;
    } else {
      pageSize = +page_size;
    }

    if (Number(page_size) > 100) {
      pageSize = 100;
    }

    let offset = Number(page);
    if (!page) {
      offset = 1;
    } else {
      offset = +page;
    }

    const skip = (offset - 1) * pageSize;
    let sortQuery = {
      created_at: -1,
    };

    const PostQuery = Post.find(query);
    PostQuery.skip(skip);
    PostQuery.limit(pageSize);
    PostQuery.sort(sortQuery);

    const count = await Post.count(query);

    const results = (await PostQuery.lean().exec()) || [];

    return res.json({
      status: true,
      message: "Success",
      data: {
        list: results,
        count,
      },
    });
  } catch (error) {
    return res.status(400).send(new AppError("Get posts failed!", 400));
  }
});

exports.getOne = factory.getOne(Post);
exports.create = factory.createOne(Post);
exports.update = factory.updateOne(Post);
exports.delete = factory.deleteOne(Post);
