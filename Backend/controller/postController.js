const db = require("../models");
const Sequelize = require("sequelize");
const { Op } = Sequelize;

class PostController {
  index = (req, res) => {
    res.send("Post Controller");
  };

  getAllPost = async (req, res) => {
    const userId = req.userId;
    let limit = 5;
    let offset = (req.query.page - 1) * limit;
    let title = req.query.title;
    try {
      let { count, rows} = await db.Post.findAndCountAll({
        include: [
          {
            model: db.User,
            attributes: ["name", "userId"],
            required: true,
          },
          {
            model: db.Comment,
            attributes: ['commentId'],
          },
        ],
        where: {
          title: {
            [Op.iLike]: `%${title}%`,
          }
        },
        required: true,
        offset: offset,
        limit: limit,
        order: [["createdAt", "ASC"]],
      });

      rows.map((item) => {
        item.dataValues.isMyPost =
          item.dataValues.userId === userId ? true : false;
        item.dataValues.commentCount = item.dataValues.Comments.length;
      });
      const totalPages = Math.ceil(count / limit);
      res.status(200).json({
        success: true,
        message: "Successfully get data",
        data: {
          totalItem: count,
          totalPages,
          posts: rows,
          page: parseInt(req.query.page)
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
        data: "",
      });
    }
  };

  createPost = async (req, res) => {
    const userId = req.userId;
    const { title, content, tags } = req.body;

    try {
      if (!title || !content || tags.length === 0) {
        return res.status(422).json({
          success: false,
          message: "Please provide require field",
          data: "",
        });
      }

      const post = await db.Post.create({
        title: title,
        content: content,
        tags: tags,
        userId: userId,
      });

      res.status(201).json({
        success: true,
        message: "Successfully create post",
        data: post,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error,
        data: "",
      });
    }
  };
}

module.exports = new PostController();
